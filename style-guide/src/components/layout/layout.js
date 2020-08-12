import React from 'react';
import { Link } from 'gatsby';

import styles from '../../styles/index.module.scss';
import logo from '../../assets/logo.svg';

export default ({ children, location, nav = null }) => (
  <div>
    <div className={styles.header}>
      <Link to="/" style={{ marginRight: '60px' }}>
        <img alt="Opentable logo" src={logo} className={styles['logo']} />
        <h1>Design Bar</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" className={styles.headerLink}>
            Design Tokens
          </Link>
        </li>
        {/* <li>
          <Link to="/handover-process" className={styles.headerLink}>
            Design &amp; engineering handover process
          </Link>
        </li> */}
      </ul>
    </div>
    <div>
      {nav ? (
        <div className={styles.nav}>
          {nav}
        </div>
      ): null}
      <div className={styles.mainBody}>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  </div>
);
