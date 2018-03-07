const SVGO = require('svgo');
const path = require('path');
const fs = require('fs-extra');
const nodeYAML = require('node-yaml');
const xml2js = require('xml2js');

const iconSize = 24;

var svgo = new SVGO({
  plugins: [
    {
      cleanupAttrs: true
    },
    {
      removeDoctype: true
    },
    {
      removeXMLProcInst: true
    },
    {
      removeComments: true
    },
    {
      removeMetadata: true
    },
    {
      removeTitle: true
    },
    {
      removeDesc: true
    },
    {
      removeUselessDefs: true
    },
    {
      removeEditorsNSData: true
    },
    {
      removeEmptyAttrs: true
    },
    {
      removeHiddenElems: true
    },
    {
      removeEmptyText: true
    },
    {
      removeEmptyContainers: true
    },
    {
      removeViewBox: false
    },
    {
      cleanUpEnableBackground: true
    },
    {
      convertStyleToAttrs: true
    },
    {
      convertColors: true
    },
    {
      convertPathData: true
    },
    {
      convertTransform: true
    },
    {
      removeUnknownsAndDefaults: true
    },
    {
      removeNonInheritableGroupAttrs: true
    },
    {
      removeUselessStrokeAndFill: true
    },
    {
      removeUnusedNS: true
    },
    {
      cleanupIDs: true
    },
    {
      cleanupNumericValues: true
    },
    {
      moveElemsAttrsToGroup: true
    },
    {
      moveGroupAttrsToElems: true
    },
    {
      collapseGroups: true
    },
    {
      removeRasterImages: true
    },
    {
      mergePaths: true
    },
    {
      convertShapeToPath: true
    },
    {
      sortAttrs: true
    },
    {
      transformsWithOnePath: false
    },
    {
      removeDimensions: true
    },
    {
      removeAttrs: { attrs: '(stroke|fill)' }
    }
  ]
});

function generateTokenFile() {
  fs
    .readdir(__dirname)
    .then(files => {
      return Promise.all(
        files
          .filter(fileName => path.extname(fileName) === '.svg')
          .map(fileName => {
            const id = path.basename(fileName, '.svg');

            return fs
              .readFile(fileName, 'utf8')
              .then(file => {
                return svgo.optimize(file, { path: fileName });
              })
              .then(iconData => {
                return new Promise((resolve, reject) => {
                  xml2js.parseString(iconData.data, (err, result) => {
                    if (err) {
                      return reject(err);
                    }
                    return resolve(result);
                  });
                });
              })
              .then(icon => {
                /* parse the XML. warn if there is an defs (because that means an id
           and a xlink which could collide.

           once we are sure icons from design are single paths, we can extract the
           path here as a root element. for now, warn if there are nodes that
           are not paths or if there is a group or if there is more then one path.
           */
                const innerContent = icon.svg;

                if (innerContent['def']) {
                  console.log(
                    `    warning: skipping ${fileName} as it has definitions, check SVG`
                  );
                  return null;
                }

                if (innerContent['g']) {
                  console.log(
                    `    warning: ${fileName} has at least one root grouped path, try to convert into just paths`
                  );
                }

                if (Object.keys(innerContent).length != 2) {
                  console.log(
                    `    warning: skipping ${fileName} as it has multiple groups or paths at the root which cannot be combined`
                  );
                  return null;
                }

                if (!innerContent['$'].viewBox) {
                  console.log(
                    `    warning: skipping ${fileName} as it doesn't define a viewbox`
                  );
                  return null;
                } else if (
                  innerContent['$'].viewBox != `0 0 ${iconSize} ${iconSize}`
                ) {
                  console.log(
                    `    warning: skipping ${fileName} as the viewbox isn't ${iconSize}`
                  );
                  return null;
                }

                var builder = new xml2js.Builder({
                  renderOpts: {
                    pretty: false
                  },
                  headless: true
                });

                if (innerContent.path) {
                  if (innerContent.path.length > 1) {
                    console.log(
                      `    warning: skipping ${fileName} as it has multiple root paths`
                    );
                    return null;
                  }
                  return builder.buildObject({ path: innerContent.path[0] });
                } else if (innerContent.g) {
                  if (innerContent.g.length > 1) {
                    console.log(
                      `    warning: skipping ${fileName} as it has multiple root paths`
                    );
                    return null;
                  }
                  return builder.buildObject({ g: innerContent.g[0] });
                } else {
                  console.log(
                    `     warning: skipping ${fileName} as it does not have a top level path or group`
                  );
                  return null;
                }
              })
              .then(iconData => {
                return { id, value: iconData };
              });
          })
      );
    })
    .then(icons => {
      const props = icons.reduce((accum, val) => {
        if (val != null) {
          accum[val.id] = { value: val.value };
        }

        return accum;
      }, {});

      props.iconSize = {
        value: iconSize
      };

      const iconFile = {
        props,
        global: {
          platform: 'core',
          type: 'icon',
          category: 'icon'
        }
      };

      return new Promise((resolve, reject) => {
        nodeYAML.write(path.join(__dirname, 'token.yml'), iconFile, err => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      });
    })
    .then(() => {
      console.log('icons generated successfully');
    })
    .catch(err => {
      console.log('error generating icons:\n', err);
    });
}

generateTokenFile();
