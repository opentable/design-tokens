import React, { useState } from 'react';
import _ from 'lodash';
import icons from 'otkit-icons/token.common';

import SectionHeader from '../section-header';
import styles from '../../styles/otkit-icons.module.scss';

const Icons = () => {
  const [filter, setFilter] = useState('');

  const keys = _.keys(icons).sort();
  const actualIcons = _.without(keys, 'iconSize');

  const getFilter = event => {
    const key = event.target.value || '';
    setFilter(key.toLowerCase());
  };

  const renderHeaderContent = () => (
    <input
      className={styles.form}
      type="text"
      onChange={getFilter}
      placeholder="Search icon"
    />
  );

  const tokens = actualIcons
    .filter(name => {
      if (filter === '') {
        return true;
      }
      const iconName = _.kebabCase(name);
      const regex = RegExp(`.*${filter}.*`, 'g');
      return iconName.match(regex);
    })
    .map(name => {
      const value = icons[name];

      return (
        <div className={styles.card} key={name}>
          <div className={styles.iconBlock}>
            <div
              className={styles.icon}
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
          <div className={styles.iconName}>{_.kebabCase(name)}</div>
        </div>
      );
    });
  return (
    <div className={styles.mainContainer}>
      <SectionHeader
        text="Icons"
        type="SectionHeader__small"
        content={renderHeaderContent()}
      />
      <div className={styles.sectionIcon}>{tokens}</div>
    </div>
  );
};

export default Icons;
