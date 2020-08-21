import React from 'react';
import _ from 'lodash';
import token from 'otkit-grids/token.common';

import SectionHeader from '../section-header';
import styles from '../../styles/index.module.scss';

const Grids = () => {
  var tokens = _.toPairsIn(token);

  tokens = tokens.map((token, index) => {
    return (
      <div key={index}>
        {_.kebabCase(token[0])}: {token[1]}
      </div>
    );
  });
  return (
    <div className={styles.mainContainer}>
      <SectionHeader text="Grids" type="SectionHeader__small" />
      {tokens}
    </div>
  );
};

export default Grids;
