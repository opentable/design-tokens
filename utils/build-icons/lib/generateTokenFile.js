'use strict';

const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const getIconData = require('./getIconData');
const getIconFileList = require('./getIconFileList');
const writeToken = require('./writeToken');
const generateIconColorVariants = require('./generateIconColorVariants');
const validateIcon = require('./validateIcon');
const exportSvgFile = require('./exportSvgFile');

const generateTokenFile = (
  transformedSvgsDir = path.resolve(__dirname, '../../../publicDist')
) => {
  if (transformedSvgsDir) {
    if (fs.existsSync(transformedSvgsDir)) rimraf.sync(transformedSvgsDir);
    fs.mkdirSync(transformedSvgsDir);
  }

  return getIconFileList()
    .mapSeries(getIconData)
    .mapSeries(validateIcon)
    .mapSeries(generateIconColorVariants)
    .reduce((allIcons, iconColorVariants) => {
      return allIcons.concat(iconColorVariants);
    }, [])
    .mapSeries(exportSvgFile(transformedSvgsDir))
    .then(writeToken)
    .then(() => 'icons generated successfully');
};

module.exports = generateTokenFile;
