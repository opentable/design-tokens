'use strict';

const _ = require('lodash');

const diffToVersion = (latest, toPublish) => {
  const latestKeys = Object.keys(latest);
  const toPublishKeys = Object.keys(toPublish);

  const differentKeys = _.difference(toPublishKeys, latestKeys).length;
  let version;

  if (
    toPublishKeys.length < latestKeys.length ||
    differentKeys > toPublishKeys.length - latestKeys.length
  ) {
    return 'major';
  } else if (
    differentKeys > 0 &&
    differentKeys === toPublishKeys.length - latestKeys.length
  ) {
    version = 'minor';
  }

  for (let i = 0; i < toPublishKeys.length; i++) {
    if (
      latest[toPublishKeys[i]] &&
      !_.isEqual(latest[toPublishKeys[i]], toPublish[toPublishKeys[i]]) &&
      version === undefined
    ) {
      version = 'patch';
    }
  }

  return version;
};

module.exports = diffToVersion;
