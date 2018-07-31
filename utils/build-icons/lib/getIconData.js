'use strict';

const fs = require('fs-extra');
const SVGO = require('svgo');
const xml2js = require('xml2js');

const { svgo: svgoConfig } = require('./config');
const svgo = new SVGO(svgoConfig);

const getIconData = ({ fileName, id }) =>
  fs
    .readFile(fileName, 'utf8')
    .then(file => svgo.optimize(file, { path: fileName }))
    .then(
      iconData =>
        new Promise((resolve, reject) => {
          const ids = [];

          xml2js.parseString(
            iconData.data,
            {
              attrValueProcessors: [
                (val, name) => {
                  if (name === 'id') {
                    ids.push(val);
                  }

                  return val;
                }
              ]
            },
            (err, result) => {
              if (err) {
                return reject(err);
              }

              return resolve({ icon: result, fileName, id, svgIds: ids });
            }
          );
        })
    );

module.exports = getIconData;
