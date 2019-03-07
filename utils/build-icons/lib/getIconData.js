'use strict';

const fs = require('fs-extra');
const SVGO = require('svgo');
const xml2js = require('xml2js');
const Promise = require('bluebird');

const { svgo: svgoConfig } = require('./config');
const svgo = new SVGO(svgoConfig);
const parseXMLString = Promise.promisify(xml2js.parseString);

const getIconData = ({ fileName, id }) =>
  fs
    .readFile(fileName, 'utf8')
    .then(file => svgo.optimize(file, { path: fileName }))
    .then(iconData => {
      const svgIds = [];
      const valueProcessor = (val, name) => {
        if (name === 'id') {
          svgIds.push(val);
        }

        return val;
      };

      return parseXMLString(iconData.data, {
        attrValueProcessors: [valueProcessor]
      }).then(icon => ({
        icon,
        fileName,
        id,
        svgIds
      }));
    });

module.exports = getIconData;
