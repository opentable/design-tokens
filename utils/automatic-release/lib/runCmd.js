'use strict';

const spawn = require('cross-spawn');

const runCmd = (script, commands = [], options) => {
  console.log('Executing: ', script, commands.join(' '));

  const cmd = spawn(script, commands, {
    ...options
  });

  let result = '';
  let error = '';

  cmd.stdout.on('data', data => (result += data.toString()));
  cmd.stderr.on('data', data => (error += data.toString()));

  return new Promise((resolve, reject) => {
    cmd.on('error', err => reject(err));
    cmd.on('close', code => {
      if (code === 0) {
        console.log(result);
        return resolve(result);
      }
      console.log(error);
      return reject(error);
    });
  });
};

module.exports = runCmd;
