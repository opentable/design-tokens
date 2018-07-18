'use strict';

const { messages, builder, buildSVG } = require('./processIconHelpers');
const { iconSize } = require('./config');

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
    console.log(messages.g(fileName));
  }

  if (Object.keys(innerContent).length != 2) {
    return console.log(messages.multiCombined(fileName));
  }

  if (!innerContent['$'].viewBox) {
    return console.log(messages.missingViewBox(fileName));
  } else if (innerContent['$'].viewBox != `0 0 ${iconSize} ${iconSize}`) {
    return console.log(messages.viewBoxSize(fileName, iconSize));
  }

  if (innerContent.path) {
    if (innerContent.path.length > 1) {
      return console.log(messages.multiRootPaths(fileName));
    }
    const path = builder.buildObject({ path: innerContent.path[0] });
    const viewBox = innerContent['$'].viewBox;
    const xmlns = innerContent['$'].xmlns;

    return { id, svg: buildSVG(xmlns, viewBox, path) };
  } else if (innerContent.g) {
    if (innerContent.g.length > 1) {
      return console.log(messages.multiRootPaths(fileName));
    }
    const path = builder.buildObject({ g: innerContent.g[0] });
    const viewBox = innerContent['$'].viewBox;
    const xmlns = innerContent['$'].xmlns;

    return { id, svg: buildSVG(xmlns, viewBox, path) };
  } else {
    return console.log(messages.missingTopLevelPathOrGroup(fileName));
  }
};

module.exports = processIcon;
