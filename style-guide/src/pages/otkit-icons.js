import React from 'react';
import _ from 'lodash';

import SectionHeader from '../components/section-header';
import icons from 'otkit-icons/token.common';
import styles from '../styles/otkit-icons.module.css';

const Icons = () => {
  const { iconSize } = icons;
  const keys = _.keys(icons).sort();
  const actualIcons = _.without(keys, 'iconSize');

  const tokens = actualIcons.map(name => {
    const value = icons[name];

    return (
      <div className={styles['card']} key={name}>
        <div className={styles['icon-block']}>
          <div
            className={styles['icon']}
            dangerouslySetInnerHTML={{ __html: value }}
          />
        </div>
        <div className={styles['icon-name']}>{_.kebabCase(name)}</div>
      </div>
    );
  });
  return (
    <div className={styles['main-container']}>
      <SectionHeader text="Icons" type="SectionHeader__small" />
      <div className={styles['section-icon']}>{tokens}</div>
    </div>
  );
};

export default Icons;
