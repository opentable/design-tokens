'use strict';

const yaml = require('js-yaml');
const fs = require('fs-extra');

/* CONFIG */
const FONT_SIZE = 'font-size';
const FONT_WEIGHT = 'font-weight';
const LINE_HEIGHT = 'line-height';
const FONT_GROUP_IDENTIFIER = FONT_SIZE;

/* UTILS */
const parseFontGroupName = str => str.replace(`-${FONT_GROUP_IDENTIFIER}`, '');

const content = yaml.load(
  fs.readFileSync(`${process.cwd()}/token.yml`, 'utf8')
);
const styles = content.props;

let fontGroups = Object.keys(styles)
  .filter(key => key.includes(FONT_GROUP_IDENTIFIER))
  .map(key => parseFontGroupName(key));

const reducer = (accumulatedOutput, FONT_NAME) =>
  accumulatedOutput +
  `
.${FONT_NAME} {
  font-size: ${styles[`${FONT_NAME}-${FONT_SIZE}`].value};
  font-weight: ${styles[`${FONT_NAME}-${FONT_WEIGHT}`].value};
  line-height: ${styles[`${FONT_NAME}-${LINE_HEIGHT}`].value};
}
`;

fs.writeFileSync(`${process.cwd()}/index.css`, fontGroups.reduce(reducer, ''));
