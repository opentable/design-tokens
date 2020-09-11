import React, { useState } from 'react';
import _ from 'lodash';
import icons from 'otkit-icons/token.theme.common';
import colors from 'otkit-colors/token.common';

import SectionHeader from '../section-header';
import styles from '../../styles/otkit-icons.module.scss';

const Icons = () => {
  const [color, setColor] = useState('#000000');
  const [filter, setFilter] = useState('');

  const keys = _.keys(icons).sort();
  const actualIcons = _.without(keys, 'iconSize');

  const updateColor = color => {
    setColor(color);
  };

  const getFilter = event => {
    const key = event.target.value || '';
    setFilter(key.toLowerCase());
  };

  const renderHeaderContent = () => {
    const keys = Object.keys(colors).sort();
    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-onchange */}
        <select
          className={styles.form}
          onChange={e => updateColor(e.target.value)}
          value={color}
        >
          <option value="#000000" default>
            Black - #000000
          </option>
          {keys.map(name => (
            <option key={name} value={colors[name]}>
              {_.kebabCase(name)} - {colors[name]}
            </option>
          ))}
        </select>
        <input
          className={styles.form}
          type="text"
          onChange={getFilter}
          placeholder="Search icon"
        />
      </div>
    );
  };

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
              style={{ color }}
            />
          </div>
          <div className={styles.iconName}>{_.kebabCase(name)}</div>
        </div>
      );
    });

  return (
    <div className={styles.mainContainer}>
      <SectionHeader
        text="Icons (theme)"
        type="SectionHeader__small"
        content={renderHeaderContent()}
      />
      <div className={styles.sectionIcon}>{tokens}</div>
    </div>
  );
};

export default Icons;
