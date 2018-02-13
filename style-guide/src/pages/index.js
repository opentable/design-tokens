import React from 'react';
import Link from 'gatsby-link';

import styles from '../styles/index.module.css';
import fonts from '../styles/fonts.css';

export default () => {
  return (
    <div className={styles.body}>
      <h1>Hello world</h1>
      <p>
        <Link className={styles.link} to="/otkit-desktop-typography/">
          link to otkit-desktop-typography
        </Link>
      </p>
    </div>
  );
};
