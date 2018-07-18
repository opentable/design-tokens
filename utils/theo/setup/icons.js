const theo = require('theo');

const transforms = require('../transforms');

module.exports = theo => {
  theo.registerValueTransform(transforms.svgDataUri);
  theo.registerTransform('icons', [tranforms.svgDataUri.name]);
};
