'use strict';

const svgToMiniDataURI = require('mini-svg-data-uri');
const xml2js = require('xml2js');

const { iconSize } = require('./config');

const builder = new xml2js.Builder({
  renderOpts: {
    pretty: false
  },
  headless: true
});

const buildSVGDataURI = (xmlns, viewBox, path) =>
  svgToMiniDataURI(`<svg xmlns="${xmlns}" viewBox="${viewBox}">${path}</svg>`);

const messages = {
  def: fileName =>
    `    warning: skipping ${fileName} as it has definitions, check SVG`,
  g: fileName =>
    `    warning: ${fileName} has at least one root grouped path, try to convert into just paths`,
  multiCombined: fileName =>
    `    warning: skipping ${fileName} as it has multiple groups or paths at the root which cannot be combined`,
  multiRootPaths: fileName =>
    `    warning: skipping ${fileName} as it has multiple root paths`,
  missingTopLevelPathOrGroup: fileName =>
    `     warning: skipping ${fileName} as it does not have a top level path or group`,
  missingViewBox: fileName =>
    `    warning: skipping ${fileName} as it doesn't define a viewbox`,
  vewBoxSize: fileName =>
    `    warning: skipping ${fileName} as the viewbox isn't ${iconSize}`
};

/* Parse the XML. 
  * Warn if there is an defs (because that means an i and a xlink which could collide).
  *
  * Once we are sure icons from design are single paths, we can extract the
  * path here as a root element. for now, warn if there are nodes that
  * are not paths or if there is a group or if there is more then one path.
*/
const processIcon = ({ icon, fileName, id }) => {
  const innerContent = icon.svg;

  if (innerContent['def']) {
    return console.log(messages.def(fileName));
  }

  if (innerContent['g']) {
    return console.log(messages.g(fileName));
  }

  if (Object.keys(innerContent).length != 2) {
    return console.log(messages.multiCombined(fileName));
  }

  if (!innerContent['$'].viewBox) {
    return console.log(messages.missingViewBox(fileName));
  } else if (innerContent['$'].viewBox != `0 0 ${iconSize} ${iconSize}`) {
    return console.log(messages.vewBoxSize(fileName));
  }

  if (innerContent.path) {
    if (innerContent.path.length > 1) {
      return console.log(messages.multiRootPaths(fileName));
    }
    const path = builder.buildObject({ path: innerContent.path[0] });
    const viewBox = innerContent['$'].viewBox;
    const xmlns = innerContent['$'].xmlns;

    return { id, svgDataUri: buildSVGDataURI(xmlns, viewBox, path) };
  } else if (innerContent.g) {
    if (innerContent.g.length > 1) {
      return console.log(messages.multiRootPaths(fileName));
    }
    const path = builder.buildObject({ g: innerContent.g[0] });
    const viewBox = innerContent['$'].viewBox;
    const xmlns = innerContent['$'].xmlns;

    return { id, svgDataUri: buildSVGDataURI(xmlns, viewBox, path) };
  } else {
    return console.log(messages.missingTopLevelPathOrGroup(fileName));
  }
};

module.exports = processIcon;
