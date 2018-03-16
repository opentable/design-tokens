import React from 'react';
import fonts from '../styles/fonts.module.css';
import styles from '../styles/index.module.css';
import Colors from './otkit-colors.js';
import Typography from './otkit-typography.js';
import Spacing from './otkit-spacing.js';
import Borders from './otkit-borders.js';
import Breakpoints from './otkit-breakpoints.js';
import Shadows from './otkit-shadows.js';
import Icons from './otkit-icons.js';
import SectionHeader from '../components/section-header';

export default () => {
  return (
    <div className={styles.body}>
      <SectionHeader text="Welcome to OTKit Style Guide" />
      <Colors />
      <Typography />
      <Spacing />
      <Borders />
      <Breakpoints />
      <Shadows />
      <Icons />
    </div>
  );
};
