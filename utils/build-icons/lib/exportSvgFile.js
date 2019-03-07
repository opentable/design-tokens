'use strict';

const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const Promise = require('bluebird');

const writeFile = Promise.promisify(fs.writeFile);

module.exports = transformedSvgsDir => icon => {
  const fileHash = crypto.createHash('sha1');
  fileHash.update(icon.svg);
  icon.transformedFileName = `${icon.id}-${fileHash
    .digest('hex')
    .slice(0, 5)}.svg`;

  // Tests are in a bit of a mess.  Instead, we just allow the tests to set the directory to null
  // to not write.  May be worth fixing tests later to be a bit more sane.
  if (!transformedSvgsDir) return Promise.resolve(icon);
  return writeFile(
    path.resolve(transformedSvgsDir, icon.transformedFileName),
    icon.svg
  ).then(() => icon);
};
