'use strict';

const Promise = require('bluebird');

const getIconData = require('./getIconData');
const getIconFileList = require('./getIconFileList');
const processIcon = require('./processIcon');
const writeToken = require('./writeToken');

const generateTokenFile = () => {
  return new Promise((resolve, reject) => {
    const icons = getIconFileList()
      .mapSeries(icons => getIconData(icons, false))
      .mapSeries(processIcon);

    Promise.all(icons)
      .then(icons => writeToken(icons, false))
      .then(() => resolve('Standard icons generated successfully'))
      .catch(err => reject(`error generating standard icons:\n ${err}`));
  });
};

module.exports = generateTokenFile;
