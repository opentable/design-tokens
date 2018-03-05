import React from 'react';
import _ from 'lodash';
import chroma from 'chroma-js';

import SectionHeader from '../components/section-header';
import token from 'otkit-colors/token.common';
import styles from '../styles/otkit-colors.module.css';

// take a hex and give us a nice text color to put over it
const textColor = hex => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

const Colors = () => {
  var tokens = _.toPairsIn(token);

  tokens = tokens.map((token, index) => {
    const rgb = token[1];
    const colorBlock =
      chroma.contrast(rgb, 'white') > 4 ? 'color-block' : 'color-block-border';
    return (
      <div className={styles['card']} key={index}>
        <div
          className={styles[colorBlock]}
          style={{ backgroundColor: rgb, color: textColor(rgb) }}
        >
          <div className={styles['color-hex']}>{chroma(rgb).hex()}</div>
          <div className={styles['color-rgb']}>{rgb}</div>
        </div>
        <div className={styles['color-name']}>{_.kebabCase(token[0])}</div>
      </div>
    );
  });
  return (
    <section>
      <SectionHeader text="Colors" />
      <div className={styles['section-color']}>{tokens}</div>
    </section>
  );
};

export default Colors;
