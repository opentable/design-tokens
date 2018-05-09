const theo = require('theo');
const svgToMiniDataURI = require('mini-svg-data-uri');

const name = 'image/svgDataUri';
const registerValueTransform = theo =>
  theo.registerValueTransform(
    name,
    prop => prop.get('type') === 'xml',
    svgToMiniDataURI
  );

module.exports = { ...registerValueTransform, name };
