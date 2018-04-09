'use strict';

const fs = require('fs-extra');
const path = require('path');
const Promise = require('bluebird');

const getIconFileList = () =>
  Promise.resolve(
    fs.readdir(process.cwd()).then(files =>
      files
        .filter(fileName => path.extname(fileName) === '.svg')
        .map(fileName =>
          Promise.resolve({
            id: path.basename(fileName, '.svg'),
            fileName
          })
        )
    )
  );

module.exports = getIconFileList;
