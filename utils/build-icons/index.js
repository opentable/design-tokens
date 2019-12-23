const Promise = require('bluebird');

const generateTokenFile = require('./lib/generateTokenFile');
const generateThemeableTokenFile = require('./lib/generateThemeableTokenFile');

Promise.all([generateTokenFile(), generateThemeableTokenFile()])
  .then(msg => {
    console.log(msg);
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
