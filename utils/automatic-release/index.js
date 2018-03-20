'use strict';

const { run } = require('./process');
run()
  .then(msg => {
    console.log(msg);
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
