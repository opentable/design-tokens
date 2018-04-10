'use strict';

const runCmd = require('./runCmd');

const publishPackage = (pkg, version, root) =>
  runCmd(
    'node',
    [
      'node_modules/.bin/lerna',
      'publish',
      '--exact',
      `--force-publish=${pkg}`,
      `--cd-version=${version}`,
      '--yes'
    ],
    {
      cwd: root
    }
  )
    .then(() => {
      console.log(`Published ${pkg} as ${version}`);
      return Promise.resolve(pkg);
    })
    .catch(err => {
      console.log(`Error publishing ${pkg} as ${version}`);
      return Promise.reject(err);
    });

module.exports = publishPackage;
