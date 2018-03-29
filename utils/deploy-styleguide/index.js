'use strict';

const ghpages = require('gh-pages');
const path = require('path');

const publicDir = path.join(__dirname, '../../style-guide/public');

ghpages.publish(
  publicDir,
  {
    repo: `https://${
      process.env.GH_TOKEN
    }@github.com/opentable/design-tokens.git`,
    silent: true,
    branch: 'gh-pages'
  },
  err => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log('Styleguide deployed succesfully');
      process.exit(0);
    }
  }
);
