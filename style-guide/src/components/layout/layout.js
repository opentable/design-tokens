import React from 'react';
import { Link } from 'gatsby';

import styles from '../../styles/index.module.scss';
import logo from '../../assets/logo.svg';

export default ({ children, nav = null, className = '' }) => (
  <div>
    <div className={styles.header}>
      <Link to="/" style={{ marginRight: '60px' }}>
        <img alt="Opentable logo" src={logo} className={styles['logo']} />
        <h1>Design Bar</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" className={styles.headerLink} activeClassName={styles.headerLinkActive} partiallyActive={window.location.pathname.includes('/otkit/')}>
            Design tokens
          </Link>
        </li>
        <li>
          <Link to="/handover-process" className={styles.headerLink} activeClassName={styles.headerLinkActive}>
            Process guidelines
          </Link>
        </li>
      </ul>
    </div>
    <div>
      {nav ? <div className={styles.nav}>{nav}</div> : null}
      <div className={styles.mainBody}>
        <div className={`${styles.main} ${className}`}>{children}</div>
      </div>
    </div>
  </div>
);
