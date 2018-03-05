import React from 'react';
import fonts from '../styles/fonts.css';
import styles from '../styles/index.module.css';
import Colors from './otkit-colors.js';
import Typography from './otkit-typography-desktop.js';
import Spacing from './otkit-spacing.js';
import Borders from './otkit-borders.js';
import Breakpoints from './otkit-breakpoints.js';
import Shadows from './otkit-shadows.js';

export default () => {
  return (
    <div className={styles.body}>
      <Colors />
      <Typography />
      <Spacing />
      <Borders />
      <Breakpoints />
      <Shadows />
    </div>
  );
};
