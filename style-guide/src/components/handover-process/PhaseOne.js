import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";
import storyMapping from '../../assets/storyMapping.png';

export default ({ addHashRoute }) => (
  <>
    <div className={styles.mainContainer}>
      <div className={styles.phase} id="phase1" onClick={() => {
        addHashRoute('phase1')
      }}>{copy["phase1"]}</div>
      <div className={styles.phaseHeader}>{copy['phase1.header']}</div>
      <div className={styles.phaseTitle}>{copy['phase1.subheader1']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase1.description1']}</p>

      <div className={styles.phaseTitle}>{copy['phase1.subheader2']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase1.description2.1']}</p>
      <p className={styles.subtext}>{copy['phase1.description2.2']}</p>
      <p className={styles.subtext}>{copy['phase1.description2.3']}</p>
    </div>
    <img className={styles.illustration} src={storyMapping} alt="storyMapping"/>
  </>
);
