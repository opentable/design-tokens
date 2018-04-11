'use strict';

const path = require('path');

const packagePathResolver = require('./defineVersion/packagePathResolver');
const runCmd = require('./runCmd');

const trimVersionName = string =>
  string[0] === 'v' ? string.substring(1).trim() : string.trim();

const versionPackage = ({ pkg, version, root }) =>
  runCmd('npm', ['version', version], {
    cwd: path.join(root, packagePathResolver(pkg))
  })
    .then(newVersion => {
      newVersion = trimVersionName(newVersion);
      console.log(`Updated ${pkg} to ${newVersion} (${version})`);
      return Promise.resolve({ pkg, version: newVersion, root });
    })
    .catch(err => {
      console.log(`Error updateding ${pkg} to ${version}`);
      return Promise.reject(err);
    });

const addFileToStage = ({ pkg, version, root }) =>
  runCmd(
    'git',
    ['add', path.join(root, packagePathResolver(pkg), 'package.json')],
    {
      cwd: root
    }
  )
    .then(() => {
      console.log(`Added ${pkg}/package.json to stage`);
      return Promise.resolve({ pkg, version, root });
    })
    .catch(err => {
      console.log(`Error adding ${pkg}/package.json to stage`);
      return Promise.reject(err);
    });

const commit = ({ pkg, version, root }) =>
  runCmd('git', ['commit', '-m', `"Released ${version} of ${pkg}"`], {
    cwd: root
  })
    .then(() => {
      console.log(`Commit "Released ${version} of ${pkg}"`);
      return Promise.resolve({ pkg, version, root });
    })
    .catch(err => {
      console.log(`Error committing "Released ${version} of ${pkg}"`);
      return Promise.reject(err);
    });

const tag = ({ pkg, version, root }) =>
  runCmd(
    'git',
    ['tag', '-a', `${pkg}@${version}`, '-m', `"${pkg} version ${version}"`],
    {
      cwd: root
    }
  )
    .then(() => {
      console.log(`Tagged ${pkg}@${version}`);
      return Promise.resolve({ pkg, version, root });
    })
    .catch(err => {
      console.log(`Error tagging ${pkg}@${version}`);
      return Promise.reject(err);
    });

module.exports = options =>
  versionPackage(options)
    .then(addFileToStage)
    .then(commit)
    .then(tag);
