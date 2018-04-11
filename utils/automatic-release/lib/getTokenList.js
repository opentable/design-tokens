'use strict';

const runCmd = require('./runCmd');

// run lernaUpdate and return a list of the packages that need to be updated
const getTokenList = root =>
  runCmd(
    'node',
    ['node_modules/.bin/lerna', 'ls', '--json', '--loglevel=silent'],
    {
      cwd: root
    }
  ).then(result =>
    Promise.resolve(
      JSON.parse(result || '[]')
        .filter(pkg => !pkg.private)
        .map(pkg => pkg.name)
    )
  );

module.exports = getTokenList;
