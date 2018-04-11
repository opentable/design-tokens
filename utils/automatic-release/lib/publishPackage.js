'use strict';

const path = require('path');

const packagePathResolver = require('./defineVersion/packagePathResolver');
const runCmd = require('./runCmd');

const publishPackage = ({ pkg, version, root }) =>
  runCmd('npm', ['publish', '.'], {
    cwd: path.join(root, packagePathResolver(pkg))
  })
    .then(() => {
      console.log(`Published ${pkg} as ${version}`);
      return Promise.resolve(pkg);
    })
    .catch(err => {
      console.log(`Error publishing ${pkg} as ${version}`);
      return Promise.reject(err);
    });

module.exports = publishPackage;
