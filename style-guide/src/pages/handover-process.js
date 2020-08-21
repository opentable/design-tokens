import React from 'react';
import Layout from '../components/layout/layout';
import styles from '../styles/index.module.scss';
import SectionHeader from '../components/section-header';

export default () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <SectionHeader text="Handover process" />
        <p>
            Test text
        </p>
      </div>
    </Layout>
  );
};
