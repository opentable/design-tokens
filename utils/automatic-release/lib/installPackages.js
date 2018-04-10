'use strict';

const fs = require('fs-extra');
const Promise = require('bluebird');
const runCmd = require('./runCmd');

// locally install latest version of packages
const installPackagesFromNPM = (packages, latestTemp) => {
  fs.ensureDirSync(latestTemp);
  fs.writeJsonSync(`${latestTemp}/package.json`, { name: 'release' });

  return Promise.mapSeries(packages, pkg =>
    runCmd('npm', ['install', pkg], {
      cwd: latestTemp
    })
      .then(() => Promise.resolve({ pkg, success: true }))
      .catch(() => Promise.resolve({ pkg, success: false }))
  );
};

module.exports = installPackagesFromNPM;
