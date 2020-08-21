import React from 'react';
import Layout from '../components/layout/layout';
import DesignSystemNav from '../components/design-nav/design-nav';

export default (Component, NavType) => (props) => {
  let Nav = null;

  if (NavType === 'design-system-nav') {
    Nav = DesignSystemNav;
  }

  return (
    <Layout nav={Nav ? <Nav /> : null}>
      <Component {...props} />
    </Layout>
  );
};
