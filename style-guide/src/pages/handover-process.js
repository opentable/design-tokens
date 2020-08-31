import React from 'react';
import Layout from '../components/layout/layout';
import styles from '../styles/handover.module.scss';
import SectionHeader from '../components/section-header';
import copy from '../../static/handover-process';
import banner from '../assets/handoverBanner.png';
export default () => {
  return (
    <Layout className={styles.noPadding}>
      <div className={styles.mainContainer}>
        <SectionHeader text={copy["header"]} className={styles.alignCenter} />
        <p className={styles.alignCenter}>
          {copy['description']}
        </p>
      </div>
      <img src={banner} alt="banner" className={styles.banner} />
      <div className={styles.mainContainer}>
        <div className={styles.title}>{copy["title"]}</div>
        <p className={styles.subtext}>{copy['subtext1']}</p>
        <p className={styles.subtext}>{copy['subtext2']}</p>
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.phase}>{copy["phase1"]}</div>
        <div className={styles.phaseHeader}>{copy['phase1.header']}</div>
        <div className={styles.phaseTitle}>{copy['phase1.subheader1']}</div>
        <p className={styles.subtext}>{copy['phase1.description1']}</p>
        <div className={styles.phaseTitle}>{copy['phase1.subheader2']}</div>
        <p className={styles.subtext}>{copy['phase1.description2.1']}</p>
        <p className={styles.subtext}>{copy['phase1.description2.2']}</p>
        <p className={styles.subtext}>{copy['phase1.description2.3']}</p>
      </div>
    </Layout>
  );
};
