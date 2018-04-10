'use strict';

const path = require('path');

const packagePathResolver = require('./defineVersion/packagePathResolver');
const runCmd = require('./runCmd');

const versionPackage = (pkg, version, root) =>
  runCmd(
    'npm',
    [
      'version',
      version,
      '--message',
      `${version} release for ${pkg}. New version: %s`
    ],
    {
      cwd: path.join(root, packagePathResolver(pkg))
    }
  )
    .then(newVersion => {
      console.log(`Updated ${pkg} to ${newVersion} (${version})`);
      return Promise.resolve({ pkg, newVersion, root });
    })
    .catch(err => {
      console.log(`Error updateding ${pkg} to ${version}`);
      return Promise.reject(err);
    });

module.exports = versionPackage;
