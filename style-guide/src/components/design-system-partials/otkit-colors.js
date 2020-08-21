import React from 'react';
import _ from 'lodash';
import chroma from 'chroma-js';
import token from 'otkit-colors/token.common';

import SectionHeader from '../section-header';
import styles from '../../styles/otkit-colors.module.scss';

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
  /* find all the base colors, then display their derived colors in groups,
   by color. */
  const baseColors = _.pickBy(token, (value, key) => {
    return _.kebabCase(key).indexOf('-') === -1;
  });

  const groups = _.map(baseColors, (value, key) => {
    const relatedColors = _.pickBy(token, (val, proposedKey) => {
      return proposedKey.indexOf(key) !== -1;
    });

    const tokens = _.toPairsIn(relatedColors)
      .sort((left, right) => {
        return chroma(left[1]).luminance() - chroma(right[1]).luminance();
      })
      .map((token, index) => {
        const rgb = token[1];
        const name = token[0];

        const colorBlock =
          chroma.contrast(rgb, 'white') > 4
            ? styles.colorBlock
            : styles.colorBlockBorder;

        return (
          <div className={styles.card} key={index}>
            <div
              className={colorBlock}
              style={{ backgroundColor: rgb, color: textColor(rgb) }}
            >
              <div className={styles.colorHex}>{chroma(rgb).hex()}</div>
              <div className={styles.colorRgb}>{rgb}</div>
            </div>
            <div className={styles.colorName}>{_.kebabCase(name)}</div>
          </div>
        );
      });

    return <div className={styles.sectionColor}>{tokens}</div>;
  });

  return (
    <div className={styles.mainContainer}>
      <SectionHeader text="Colors" type="SectionHeader__small" />
      {groups.map((group, index) => <div key={index}>{group}</div>)}
    </div>
  );
};

export default Colors;
