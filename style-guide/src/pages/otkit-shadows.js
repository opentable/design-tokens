import React from 'react';
import _ from 'lodash';

import SectionHeader from '../components/section-header';
import token from 'otkit-shadows/token.common';
import styles from '../styles/index.module.css';

const Shadows = () => {
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
      <SectionHeader text="Shadows" type="SectionHeader__small" />
      {tokens}
    </div>
  );
};

export default Shadows;
