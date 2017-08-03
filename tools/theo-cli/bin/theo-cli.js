#!/usr/bin/env node
'use strict';

const spawn = require('cross-spawn');
const args = process.argv.slice(2);

const scriptProcess = spawn(
  'node',
  [require.resolve('../scripts/build')].concat(args),
  { stdio: 'inherit' }
);

scriptProcess.on('error', () => process.exit(1));
scriptProcess.on('close', code => process.exit(code));
