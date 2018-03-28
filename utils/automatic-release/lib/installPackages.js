'use strict';

const fs = require('fs-extra');
const spawn = require('cross-spawn');

// locally install latest version of packages
const installPackagesFromNPM = (packages, latestTemp) => {
  fs.ensureDirSync(latestTemp);
  fs.writeJsonSync(`${latestTemp}/package.json`, { name: 'release' });

  return packages.map(pkg => {
    const cmd = spawn('npm', ['install', pkg], {
      stdio: 'inherit',
      cwd: latestTemp
    });
    return new Promise(resolve => {
      cmd.on('close', code => (code === 0 ? resolve(pkg) : resolve(null)));
    });
  });
};

module.exports = installPackagesFromNPM;
