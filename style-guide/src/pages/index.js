import React from 'react';
import withLayout from '../hocs/withLayout';

import styles from '../styles/index.module.scss';

import Colors from '../components/design-system-partials/otkit-colors.js';
import Typography from '../components/design-system-partials/otkit-typography.js';
import Spacing from '../components/design-system-partials/otkit-spacing.js';
import Borders from '../components/design-system-partials/otkit-borders.js';
import Breakpoints from '../components/design-system-partials/otkit-breakpoints.js';
import Shadows from '../components/design-system-partials/otkit-shadows.js';
import Grids from '../components/design-system-partials/otkit-grids.js';
import Icons from '../components/design-system-partials/otkit-icons.js';
import IconsTheme from '../components/design-system-partials/otkit-icons-theme.js';
import SectionHeader from '../components/section-header';

export default withLayout(() => {
  return (
    <div className={styles.mainContainer}>
      <SectionHeader text="Design Tokens" />
      <p>
        This page shows current design tokens used in OTKit. To contribute, or
        add an issue, visit the{' '}
        <a href="https://github.com/opentable/design-tokens" rel="noreferrer" target="_blank">
          design-tokens repository
        </a>
        .
      </p>
      <Colors />
      <Typography />
      <Grids />
      <Spacing />
      <Borders />
      <Breakpoints />
      <Shadows />
      <Icons />
      <IconsTheme />
    </div>
  );
}, 'design-system-nav');
