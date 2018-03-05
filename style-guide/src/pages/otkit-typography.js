import React from 'react';
import _ from 'lodash';
import SectionHeader from '../components/section-header';

import token from 'otkit-typography-desktop/token.common';
import styles from '../styles/otkit-typography-desktop.module.css';

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

const TypographyDesktop = () => {
  const groups = typographyGroups.map((group, index) => {
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
      <div className={styles['font-item']} style={divStyle} key={index}>
        {groupName} | font-size: {fontSize} | font-weight: {fontWeight} |
        line-height: {lineHeight}
      </div>
    );
  });
  return (
    <section>
      <SectionHeader text="Typography – Desktop" />
      <div className={styles['font-column']}>{groups}</div>
    </section>
  );
};

export default TypographyDesktop;
