import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";
import PhaseHeader from "./PhaseHeader";

export default ({addHashRoute}) => (
  <div className={styles.mainContainer}>
    <PhaseHeader
      addHashRoute={() => addHashRoute('phase5')}
      phase='phase5'
    />

    <div className={styles.phaseTitle}>{copy['phase5.subheader1']}</div>
    <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase5.description1']}</p>
  </div>
);
