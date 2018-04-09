'use strict';

const Promise = require('bluebird');

const getIconData = require('./getIconData');
const getIconFileList = require('./getIconFileList');
const processIcon = require('./processIcon');
const writeToken = require('./writeToken');

const generateTokenFile = () => {
  return new Promise((resolve, reject) => {
    const icons = getIconFileList()
      .mapSeries(getIconData)
      .mapSeries(processIcon);

    Promise.all(icons)
      .then(writeToken)
      .then(() => resolve('icons generated successfully'))
      .catch(err => reject('error generating icons:\n', err));
  });
};

module.exports = generateTokenFile;
