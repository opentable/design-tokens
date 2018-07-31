'use strict';

const { messages, builder, buildSVG } = require('./processIconHelpers');
const { iconSize } = require('./config');

/* Parse the XML.
 * We can add various warning and analysis checks here, but for now,
 * we are primarily concerned about sizing of the viewbox.
*/
const processIcon = ({ icon, fileName, id, svgIds }) => {
  const innerContent = icon.svg;
  const result = { id, fileName, svgIds };

  if (!innerContent['$'].viewBox) {
    return { ...result, error: messages.missingViewBox(fileName) };
  } else if (innerContent['$'].viewBox != `0 0 ${iconSize} ${iconSize}`) {
    return { ...result, error: messages.viewBoxSize(fileName, iconSize) };
  }

  const svg = builder.buildObject(icon);
  return { ...result, svg };
};

module.exports = processIcon;
