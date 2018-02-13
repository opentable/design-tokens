import React from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';

import token from 'otkit-desktop-typography/token.common';
import styles from '../styles/otkit-desktop-typography.module.css';

const typographyGroups = [
  {
    name: 'heading-xlarge',
    isAlternate: false
  },
  {
    name: 'heading-large',
    isAlternate: false
  },
  {
    name: 'heading-large',
    isAlternate: true
  },
  {
    name: 'heading-medium',
    isAlternate: false
  },
  {
    name: 'subheading-small',
    isAlternate: false
  },
  {
    name: 'bodytext-small',
    isAlternate: false
  },
  {
    name: 'subtext-xsmall',
    isAlternate: false
  },
  {
    name: 'subtext-xsmall',
    isAlternate: true
  }
];

export default () => {
  const groups = typographyGroups.map(group => {
    const fontSize = token[_.camelCase(`${group.name}-font-size`)];
    const fontWeight =
      token[
        _.camelCase(
          `${group.name}-font-weight${group.isAlternate ? '-alternate' : ''}`
        )
      ];
    const lineHeight = token[_.camelCase(`${group.name}-line-height`)];
    const groupName = `${group.name}${group.isAlternate ? '-alternate' : ''}`;
    const divStyle = {
      fontSize,
      fontWeight,
      lineHeight
    };
    return (
      <div className={styles['font-item']} style={divStyle}>
        {groupName} | font-size: {fontSize} | font-weight: {fontWeight} |
        line-height: {lineHeight}
      </div>
    );
  });
  return (
    <div>
      <div className={styles['font-column']}>{groups}</div>
      <Link to="/">back to index</Link>
    </div>
  );
};
