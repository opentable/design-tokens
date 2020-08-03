'use strict';

const yaml = require('js-yaml');
const path = require('path');
const packagePathResolver = require('./packagePathResolver');
const fs = require('fs-extra');
const differ = require('jest-diff');
const diffToSemver = require('./diffToSemver');

const defineVersion = (pkg, root, latestTemp) => {
  let version, diff;

  const updatedContent = yaml.safeLoad(
    fs.readFileSync(path.join(root, `${packagePathResolver(pkg)}/token.yml`), {
      encoding: 'utf-8'
    })
  );
  const latestPath = path.join(latestTemp, 'node_modules', pkg, 'token.yml');

  if (fs.pathExistsSync(latestPath)) {
    const latestContent = yaml.safeLoad(fs.readFileSync(latestPath), {
      encoding: 'utf-8'
    });
    diff = differ(latestContent.props, updatedContent.props);
    version = diffToSemver(latestContent.props, updatedContent.props);
  }

  return {
    version,
    diff
  };
};

module.exports = defineVersion;
