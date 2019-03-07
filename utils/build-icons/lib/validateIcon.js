'use strict';

const { messages } = require('./processIconHelpers');
const { iconSize } = require('./config');

/*
 * We can add various warning and analysis checks here, but for now,
 * we are primarily concerned about sizing of the viewbox.
 */
const processIcon = iconData => {
  const { icon, fileName } = iconData;
  const innerContent = icon.svg;

  if (!innerContent['$'].viewBox) {
    return { ...iconData, error: messages.missingViewBox(fileName) };
  } else if (innerContent['$'].viewBox != `0 0 ${iconSize} ${iconSize}`) {
    return { ...iconData, error: messages.viewBoxSize(fileName, iconSize) };
  }

  return iconData;
};

module.exports = processIcon;
