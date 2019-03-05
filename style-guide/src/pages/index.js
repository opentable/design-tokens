import React from 'react';
import fonts from '../styles/fonts.module.css';
import styles from '../styles/index.module.css';
import Colors from './otkit-colors.js';
import Typography from './otkit-typography.js';
import Spacing from './otkit-spacing.js';
import Borders from './otkit-borders.js';
import Breakpoints from './otkit-breakpoints.js';
import Shadows from './otkit-shadows.js';
import Grids from './otkit-grids.js';
import Icons from './otkit-icons.js';
import SectionHeader from '../components/section-header';

export default () => {
  return (
    <div className={styles['main-container']}>
      <SectionHeader text="Design Tokens" />
      <p>
        This page shows current design tokens used in OTKit. To contribute, or
        add an issue, visit the{' '}
        <a href="https://github.com/opentable/design-tokens" target="_blank">
          design-tokens repository
        </a>.
      </p>
      <Colors />
      <Typography />
      <Grids />
      <Spacing />
      <Borders />
      <Breakpoints />
      <Shadows />
      <Icons />
    </div>
  );
};
