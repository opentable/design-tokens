'use strict';

const yaml = require('node-yaml');
const path = require('path');

const otKitColors = yaml.readSync(
  path.resolve(__dirname, '../../../OTKit/otkit-colors/token.yml')
).props;

const { builder } = require('./processIconHelpers');

const FILL_VARIABLE = '[[FILL_COLOR]]';

module.exports = iconData => {
  let assumedFillColor;
  let multipleFillColors = false;
  const originalRawSvg = builder.buildObject(iconData.icon);

  const replaceFill = parent => {
    Object.keys(parent).forEach(childKey => {
      const child = parent[childKey];

      if (typeof child === 'object') replaceFill(child);
      else if (childKey === 'fill' && child.toLowerCase() !== 'none') {
        if (!assumedFillColor) assumedFillColor = child.toLowerCase();
        if (assumedFillColor !== child.toLowerCase()) multipleFillColors = true;

        parent[childKey] = FILL_VARIABLE;
      }
    });
  };

  replaceFill(iconData.icon);

  // We always include the original token so older users of OTKit don't
  // need to update anything.  This also covers the multi-color case.
  const icons = [{ ...iconData, svg: originalRawSvg }];

  // If the icon has multiple fill colors, we assume that the color of the icon is
  // significant, and thus cannot be automatically transformed into multiple colors.
  if (multipleFillColors) return icons;

  const rawSVGTemplate = builder.buildObject(iconData.icon);

  Object.keys(otKitColors).forEach(colorName => {
    const colorValue = otKitColors[colorName].value;

    icons.push({
      ...iconData,
      id: `${iconData.id}_${colorName}`,
      svgIds: iconData.svgIds.map(id => `${id}_${colorName}`),
      svg: rawSVGTemplate.replace(FILL_VARIABLE, colorValue)
    });
  });

  return icons;
};
