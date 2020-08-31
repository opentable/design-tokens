import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";

export default ({addHashRoute}) => (
  <div className={styles.mainContainer}>
    <div className={styles.phase} id="phase5" onClick={() => {
      addHashRoute('phase5')
    }}>{copy["phase5"]}</div>
    <div className={styles.phaseHeader}>{copy['phase5.header']}</div>

    <div className={styles.phaseTitle}>{copy['phase5.subheader1']}</div>
    <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase5.description1']}</p>
  </div>
);
