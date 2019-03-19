'use strict';

const nodeYAML = require('node-yaml');
const path = require('path');
const Promise = require('bluebird');
const _ = require('lodash');
const url = require('url');

const { messages } = require('./processIconHelpers');
const { iconSize } = require('./config');

const writeToken = icons => {
  const props = icons.reduce(
    (accum, val) => {
      accum.ids = accum.ids.concat(val.svgIds);

      if (val.error) {
        accum.errors = accum.errors.concat(val.error);
      }

      accum.output[val.id] = { value: url.resolve(process.env.DESIGN_TOKENS_CDN_PATH, val.transformedFileName) };

      return accum;
    },
    {
      output: {
        iconSize: { value: iconSize + 'px' }
      },
      ids: [],
      errors: []
    }
  );

  const iconFile = {
    props: props.output,
    global: {
      platform: 'core',
      type: 'icon',
      category: 'icon'
    }
  };

  return new Promise((resolve, reject) => {
    const dups = _(props.ids)
      .groupBy()
      .omitBy(count => count.length === 1)
      .keys()
      .value();

    let message = `${props.errors.join('\n')}${
      dups.length > 0 ? messages.duplicateIds(dups) : ''
    }`;

    if (message.length > 0) {
      return reject(message);
    }

    nodeYAML.write(path.join(process.cwd(), 'token.yml'), iconFile, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
};

module.exports = writeToken;
