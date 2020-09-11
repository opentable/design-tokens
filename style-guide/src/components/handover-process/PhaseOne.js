import styles from '../../styles/handover.module.scss';
import copy from '../../../static/handover-process';
import React from 'react';
import PhaseHeader from "./PhaseHeader";
import ResourceBox from "./ResourceBox";
import Quote from "./Quote";
import storyMapping from '../../assets/storyMapping.png';

export default ({addHashRoute}) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <PhaseHeader
          addHashRoute={() => addHashRoute('phase1')}
          phase='phase1'
        />
        <div className={styles.phaseTitle}>{copy['phase1.subheader1']}</div>
        <p className={`${styles.subtext} ${styles.mt0}`}>
          {copy['phase1.description1']}
        </p>

        <ResourceBox resource="resource1"/>

        <div className={styles.phaseTitle}>{copy['phase1.subheader2']}</div>
        <p className={`${styles.subtext} ${styles.mt0}`}>
          {copy['phase1.description2.1']}
        </p>
        <p className={styles.subtext}>{copy['phase1.description2.2']}</p>
        <p className={styles.subtext}>{copy['phase1.description2.3']}</p>

        <ResourceBox resource="resource2" />

        <Quote title="quote1" />
      </div>
      <img className={styles.illustration} src={storyMapping} alt="storyMapping" />
    </>
  );
};
