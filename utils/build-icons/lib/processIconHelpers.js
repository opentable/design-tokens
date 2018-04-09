'use strict';

const svgToMiniDataURI = require('mini-svg-data-uri');
const xml2js = require('xml2js');

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
  viewBoxSize: (fileName, iconSize) =>
    `    warning: skipping ${fileName} as the viewbox isn't ${iconSize}`
};

const builder = new xml2js.Builder({
  renderOpts: {
    pretty: false
  },
  headless: true
});

const buildSVGDataURI = (xmlns, viewBox, path) =>
  svgToMiniDataURI(`<svg xmlns="${xmlns}" viewBox="${viewBox}">${path}</svg>`);

module.exports = {
  messages,
  builder,
  buildSVGDataURI
};
