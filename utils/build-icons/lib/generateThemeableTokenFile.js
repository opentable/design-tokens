'use strict';

const Promise = require('bluebird');

const getIconData = require('./getIconData');
const getIconFileList = require('./getIconFileList');
const processIcon = require('./processIcon');
const writeToken = require('./writeToken');

const generateThemeableTokenFile = () => {
  return new Promise((resolve, reject) => {
    const icons = getIconFileList()
      .mapSeries(icons => getIconData(icons, true))
      .mapSeries(processIcon);

    Promise.all(icons)
      .then(icons => writeToken(icons, true))
      .then(() => resolve('Themeable icons generated successfully'))
      .catch(err => reject(`error generating themable icons:\n ${err}`));
  });
};

module.exports = generateThemeableTokenFile;
