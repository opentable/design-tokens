import React from 'react';
import { Link } from 'gatsby';
import styles from '../../styles/index.module.scss';

const isPartiallyActive = ({ isCurrent }) => {
  return isCurrent ? { className: styles.linkActive } : null;
};
const NavLink = props => (
  <div className={styles.navLink}>
    <Link to={props.to} getProps={isPartiallyActive}>
      {props.children}
    </Link>
  </div>
);

export default () => (
  <div className={styles.navSection}>
    <h4>DESIGN TOKENS</h4>
    <NavLink to="/">All Design Tokens</NavLink>
    <NavLink to="/otkit/colors/">Colors</NavLink>
    <NavLink to="/otkit/typography/">Typography</NavLink>
    <NavLink to="/otkit/grids/">Grids</NavLink>
    <NavLink to="/otkit/spacing/">Spacing</NavLink>
    <NavLink to="/otkit/borders/">Borders</NavLink>
    <NavLink to="/otkit/breakpoints/">Breakpoints</NavLink>
    <NavLink to="/otkit/shadows/">Shadows</NavLink>
    <NavLink to="/otkit/icons/">Icons</NavLink>
    <NavLink to="/otkit/icons-theme/">Icons (theme)</NavLink>
  </div>
);
