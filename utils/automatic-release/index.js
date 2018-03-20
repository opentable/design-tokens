'use strict';

const { run } = require('./process');

const argv = require('minimist')(process.argv.slice(2));
const doPublish = argv['test'] ? false : true;

run(doPublish)
  .then(msg => {
    console.log(msg);
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
