import React from 'react';
import styles from '../styles/index.module.scss';
import SectionHeader from '../components/section-header';
import withLayout from '../hocs/withLayout';

export default withLayout(() => {
  return (
    <div className={styles.mainContainer}>
      <SectionHeader text="Whoops" />
      <p>404</p>
    </div>
  );
});
