import React from 'react';
import Link from 'gatsby-link';

import styles from '../styles/index.module.css';
import logo from '../assets/logo.svg';

const NavLink = props => (
  <div className={styles['nav-link']}>
    <Link to={props.to} activeClassName={styles['link-active']}>
      {props.children}
    </Link>
  </div>
);

export default ({ children }) => (
  <div>
    <div className={styles['header']}>
      <Link to="/" style={{ marginRight: '60px' }}>
        <img src={logo} className={styles['logo']} />
        <h1>Design Bar</h1>
      </Link>
      <ul>
        <li>
          <Link to="/otkit/getting-started" className={styles['header-link']}>
            🍹 OTKit Guidelines
          </Link>
        </li>
        <li>
          <a
            href="https://opentable.github.io/design-tokens/"
            target="_blank"
            className={styles['header-link']}
          >
            🍷 Design Tokens
          </a>
        </li>
        <li>
          <Link to="/data/getting-started" className={styles['header-link']}>
            🍺 Data
          </Link>
        </li>
        <li>
          <Link to="/copy/copy-guidelines" className={styles['header-link']}>
            🍸 Copy guidelines
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <div className={styles['nav']}>
        <div className={styles['nav-section']}>
          <h4>DESIGN TOKENS</h4>
          <div className={styles['nav-link']}>
            <Link exact to="/" activeClassName={styles['link-active']}>
              All Design Tokens
            </Link>
          </div>
          <NavLink to="/otkit-colors/">Colors</NavLink>
          <NavLink to="/otkit-typography">Typography</NavLink>
          <NavLink to="/otkit-grids">Grids</NavLink>
          <NavLink to="/otkit-spacing/">Spacing</NavLink>
          <NavLink to="/otkit-borders/">Borders</NavLink>
          <NavLink to="/otkit-breakpoints/">Breakpoints</NavLink>
          <NavLink to="/otkit-shadows/">Shadows</NavLink>
          <NavLink to="/otkit-icons/">Icons</NavLink>
        </div>
      </div>
      <div className={styles['main-body']}>
        <div className={styles['main']}>{children()}</div>
      </div>
    </div>
  </div>
);
