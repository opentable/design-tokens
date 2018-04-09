'use strict';

const fs = require('fs-extra');
const Promise = require('bluebird');
const spawn = require('cross-spawn');

// locally install latest version of packages
const installPackagesFromNPM = (packages, latestTemp) => {
  fs.ensureDirSync(latestTemp);
  fs.writeJsonSync(`${latestTemp}/package.json`, { name: 'release' });

  return Promise.each(packages, pkg => {
    const cmd = spawn('npm', ['install', pkg], {
      stdio: 'inherit',
      cwd: latestTemp
    });
    return new Promise(resolve =>
      cmd.on('close', code => resolve(code === 0 ? pkg : null))
    );
  });
};

module.exports = installPackagesFromNPM;
