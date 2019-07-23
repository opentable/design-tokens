import React from 'react';
import _ from 'lodash';

import SectionHeader from '../components/section-header';
import token from 'otkit-grids/token.common';
import styles from '../styles/index.module.css';

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
    <div className={styles['main-container']}>
      <SectionHeader text="Grids" type="SectionHeader__small" />
      {tokens}
    </div>
  );
};

export default Grids;
