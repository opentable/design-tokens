'use strict';

const path = require('path');

const packagePathResolver = require('./defineVersion/packagePathResolver');
const runCmd = require('./runCmd');

const pushChanges = root =>
  runCmd('git', ['push', 'origin', 'master', '--follow-tags'], {
    cwd: root
  })
    .then(() => {
      console.log(`Pushed changes to master`);
      return Promise.resolve();
    })
    .catch(err => {
      console.log(`Error pushing changes to master`);
      return Promise.reject(err);
    });

module.exports = pushChanges;
