'use strict';

const console = require('console');
const fs = require('fs-extra');
const path = require('path');
const Promise = require('bluebird');

const checkUpdated = require('./checkUpdated');
const defineVersion = require('./defineVersion');
const installPackages = require('./installPackages');
const publishPackage = require('./publishPackage');

const root = path.join(__dirname, '../../../');
const latestTemp = path.join(__dirname, './tempNpm');

const run = doPublish => {
  return new Promise((resolvePublish, rejectPublish) => {
    checkUpdated(root).then(updated => {
      Promise.all(installPackages(updated, latestTemp))
        .then(installed =>
          Promise.each(installed, pkg => {
            const { diff, version } = defineVersion(pkg, root, latestTemp);
            if (version) {
              if (doPublish) {
                console.log(diff);
                console.log('--------------------------------');
                return publishPackage(pkg, version, root);
              } else {
                console.log(`TEST: "Should publish ${pkg} as ${version}"`);
                console.log(diff);
                console.log('--------------------------------');
                return Promise.resolve(pkg);
              }
            }
          })
        )
        .then(published => {
          fs.removeSync(latestTemp);
          resolvePublish(
            `Automatic release ${doPublish ? '' : 'test'} successful`
          );
        })
        .catch(err => {
          fs.removeSync(latestTemp);
          rejectPublish(
            `Automatic release ${
              doPublish ? '' : 'test'
            } failed with err ${err}`
          );
        });
    });
  });
};

module.exports = run;
