import React from 'react';
import _ from 'lodash';
import icons from 'otkit-icons/token.theme.common';
import colors from 'otkit-colors/token.common';

import SectionHeader from '../section-header';
import styles from '../../styles/otkit-icons.module.scss';

class Icons extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '#000000'
    };
    this.updateColor = this.updateColor.bind(this);
  }

  renderSelect() {
    const keys = Object.keys(colors).sort();
    return (
      <div>
        <select
          onChange={e => this.updateColor(e.target.value)}
          value={this.state.color}
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
      </div>
    );
  }

  updateColor = color => {
    this.setState({ color });
  };

  render() {
    const keys = _.keys(icons).sort();
    const actualIcons = _.without(keys, 'iconSize');

    const tokens = actualIcons.map(name => {
      const value = icons[name];

      return (
        <div className={styles.card} key={name}>
          <div className={styles.iconBlock}>
            <div
              className={styles.icon}
              dangerouslySetInnerHTML={{ __html: value }}
              style={{ color: this.state.color }}
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
          content={this.renderSelect()}
        />
        <div className={styles.sectionIcon}>{tokens}</div>
      </div>
    );
  }
}

export default Icons;
