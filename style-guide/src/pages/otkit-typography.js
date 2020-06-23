import React from 'react';
import _ from 'lodash';
import SectionHeader from '../components/section-header';

import token from 'otkit-typography-desktop/token.common';
import styles from '../styles/otkit-typography-desktop.module.css';

const typographyGroups = [
  'xxlarge-bold',
  'xlarge-bold',
  'large-bold',
  'large-medium',
  'medium-bold',
  'small-bold',
  'small-medium',
  'small-regular',
  'xsmall-bold',
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
    <div className={styles['main-container']}>
      <SectionHeader text="Typography – Desktop" type="SectionHeader__small" />
      <p>
        To use these OTKit typography rules in your project, we have a
        production-tested package that exports readily made font groupings for
        you:{' '}
        <a href="https://github.com/opentable/ot-react-ui-components/tree/master/styles/typography-desktop">
          @ot-react-ui/typography-desktop.
        </a>{' '}
        See its README for details.
      </p>
      <p>
        It is generally <em>not recommended</em> to directly consume / reference
        the values in this token unless for explicit reasons, such as
        overriding.
      </p>
      <div className={styles['font-column']}>{groups}</div>
    </div>
  );
};

export default TypographyDesktop;
