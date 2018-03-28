'use strict';

const spawn = require('cross-spawn');

// run lernaUpdate and return a list of the packages that need to be updated
const checkUpdated = root => {
  const cmd = spawn(
    'node',
    ['node_modules/.bin/lerna', 'updated', '--json', '--loglevel=silent'],
    {
      cwd: root,
      stdout: 'inherit'
    }
  );
  let result = '';
  cmd.stdout.on('data', data => (result += data.toString()));

  return new Promise(resolve => {
    cmd.on('close', code => {
      return resolve(
        JSON.parse(result)
          .filter(pkg => !pkg.private)
          .map(pkg => pkg.name)
      );
    });
  });
};

module.exports = checkUpdated;
