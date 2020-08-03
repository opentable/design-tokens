'use strict';

const yaml = require('js-yaml');
const path = require('path');
const packagePathResolver = require('./packagePathResolver');
const fsExtra = require('fs-extra');
const fs = require('fs');
const differ = require('jest-diff');
const diffToSemver = require('./diffToSemver');

const defineVersion = async (pkg, root, latestTemp) => {
  let version, diff;

  const updatedContent = await yaml.safeLoad(
    fs.readFileSync(path.join(root, `${packagePathResolver(pkg)}/token.yml`), {
      encoding: 'utf-8'
    })
  );
  const latestPath = path.join(latestTemp, 'node_modules', pkg, 'token.yml');

  if (fsExtra.pathExistsSync(latestPath)) {
    const latestContent = await yaml.safeLoad(fs.readFileSync(latestPath), {
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
