const generateTokenFile = require('./lib/generateTokenFile');

generateTokenFile()
  .then(msg => {
    console.log(msg);
    process.exit(0);
  })
  .catch(err => {
    console.log('Problem generating icons!');
    console.log(err);
    process.exit(1);
  });
