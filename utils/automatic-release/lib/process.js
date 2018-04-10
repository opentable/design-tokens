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
      installPackages(updated, latestTemp)
        .then(installed =>
          Promise.mapSeries(installed, pkg => {
            const { diff, version } = defineVersion(pkg, root, latestTemp);
            const printDiff = () =>
              console.log(
                `${diff ||
                  '<DIFF NOT AVAILABLE>'}\n--------------------------------`
              );

            if (!version) {
              return Promise.resolve();
            }

            if (doPublish) {
              printDiff();
              return publishPackage(pkg, version, root);
            } else {
              console.log(`TEST: "Should publish ${pkg} as ${version}"`);
              printDiff();
              return Promise.resolve(pkg);
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
