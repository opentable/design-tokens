'use strict';

const nodeYAML = require('node-yaml');
const path = require('path');
const Promise = require('bluebird');

const { iconSize } = require('./config');

const writeToken = icons => {
  const props = icons.reduce(
    (accum, val) => {
      if (val != undefined) {
        accum[val.id] = { value: val.svgDataUri };
      }
      return accum;
    },
    { iconSize: { value: iconSize } }
  );

  const iconFile = {
    props,
    global: {
      platform: 'core',
      type: 'icon',
      category: 'icon'
    }
  };

  return new Promise((resolve, reject) => {
    nodeYAML.write(path.join(process.cwd(), 'token.yml'), iconFile, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

module.exports = writeToken;
