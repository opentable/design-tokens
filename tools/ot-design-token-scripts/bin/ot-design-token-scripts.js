#!/usr/bin/env node

'use strict';

const spawn = require('cross-spawn');
const script = process.argv[2];
const args = process.argv.slice(3);

if (script !== 'build') {
  process.exit(1);
}

const scriptProcess = spawn(
  'node',
  [require.resolve(`../scripts/${script}`)].concat(args),
  { stdio: 'inherit' }
);

scriptProcess.on('error', () => process.exit(1));
scriptProcess.on('close', code => process.exit(code));