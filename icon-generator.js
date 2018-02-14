const FS = require('fs');
const PATH = require('path');
const SVGO = require('svgo');
const NODEYAML = require('node-yaml');

const assetDir = PATH.resolve(__dirname, 'assets');
const _tokenPath = PATH.resolve(__dirname, 'OTKit/otkit-icons/token.yml');
const _icons = {};

const _token = {
  props: {},
  global: {
    platform: 'core',
    type: 'icon',
    category: 'icon'
  }
};

var svgo = new SVGO({
  plugins: [{
    cleanupAttrs: true,
  }, {
    removeDoctype: true,
  },{
    removeXMLProcInst: true,
  },{
    removeComments: true,
  },{
    removeMetadata: true,
  },{
    removeTitle: true,
  },{
    removeDesc: true,
  },{
    removeUselessDefs: true,
  },{
    removeEditorsNSData: true,
  },{
    removeEmptyAttrs: true,
  },{
    removeHiddenElems: true,
  },{
    removeEmptyText: true,
  },{
    removeEmptyContainers: true,
  },{
    removeViewBox: false,
  },{
    cleanUpEnableBackground: true,
  },{
    convertStyleToAttrs: true,
  },{
    convertColors: true,
  },{
    convertPathData: true,
  },{
    convertTransform: true,
  },{
    removeUnknownsAndDefaults: true,
  },{
    removeNonInheritableGroupAttrs: true,
  },{
    removeUselessStrokeAndFill: true,
  },{
    removeUnusedNS: true,
  },{
    cleanupIDs: true,
  },{
    cleanupNumericValues: true,
  },{
    moveElemsAttrsToGroup: true,
  },{
    moveGroupAttrsToElems: true,
  },{
    collapseGroups: true,
  },{
    removeRasterImages: false,
  },{
    mergePaths: true,
  },{
    convertShapeToPath: true,
  },{
    sortAttrs: true,
  },{
    transformsWithOnePath: false,
  },{
    removeDimensions: true,
  },{
    removeAttrs: {attrs: '(stroke|fill)'},
  }]
});


const buildToken = (iconProps) => {
  _token.props = iconProps;
  return _token;
};


const addIconProp = (id, data) => {
  if (!id) {
    console.log('Must provide valid Id.');
    return false;
  }

  if (!_icons[id]) {
    _icons[id] = {
      value: data
    };
  }
};


const getIconProps = () => {
  return _icons;
};


const buildIconProp = (filename) => {
  const propId = filename.slice(0, -4);
  const joinedFilename = PATH.join(assetDir, filename);
  const rawFiledata = FS.readFileSync(joinedFilename, 'utf8');
  return svgo
    .optimize(rawFiledata, {path: joinedFilename})
    .then((iconData) => {
      addIconProp(propId, iconData.data);
    });
};


const writeToken = (token) => {
  return new Promise(function (resolve, reject) {
    NODEYAML.write(_tokenPath, token, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};


const generateToken = () => {
  const filenames = FS.readdirSync(assetDir);
  let promises = [];

  filenames.forEach((filename) => {
    promises.push(buildIconProp(filename));
  })

  Promise.all(promises).then(() => {
    const token = buildToken(getIconProps());
    writeToken(token);
  }).catch((err) => {
    throw err;
  });
};


generateToken();
