'use strict';

const xml2js = require('xml2js');

const messages = {
  missingViewBox: fileName => `\t${fileName} doesn't define a viewbox`,
  viewBoxSize: (fileName, iconSize) =>
    `\t${fileName} has a viewbox that isn't ${iconSize}`,
  duplicateIds: ids => `\n\tthere are duplicate ids:\n\t\t${ids.join('\n\t\t')}`
};

const builder = new xml2js.Builder({
  renderOpts: {
    pretty: false
  },
  headless: true
});

module.exports = {
  messages,
  builder
};
