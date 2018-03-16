import React from 'react';
import _ from 'lodash';
import SectionHeader from '../components/section-header';

import token from 'otkit-typography-desktop/token.common';
import styles from '../styles/otkit-typography-desktop.module.css';

const typographyGroups = [
  'xxlarge-bold',
  'xlarge-bold',
  'large-bold',
  'medium-bold',
  'small-medium',
  'small-regular',
  'xsmall-medium',
  'xsmall-regular'
];

const TypographyDesktop = () => {
  const groups = typographyGroups.map((group, index) => {
    const fontSize = token[_.camelCase(`${group}-font-size`)];
    const fontWeight = token[_.camelCase(`${group}-font-weight`)];
    const lineHeight = token[_.camelCase(`${group}-line-height`)];
    const divStyle = { fontSize, fontWeight, lineHeight };
    return (
      <div className={styles['font-item']} style={divStyle} key={index}>
        {group} | font-size: {fontSize} | font-weight: {fontWeight} |
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
