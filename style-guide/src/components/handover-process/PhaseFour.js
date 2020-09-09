import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";
import PhaseHeader from "./PhaseHeader";
import ResourceBox from "./ResourceBox";

export default ({addHashRoute}) => (
  <div className={styles.mainContainer}>
    <PhaseHeader
      addHashRoute={() => addHashRoute('phase4')}
      phase='phase4'
    />

    <div className={styles.phaseTitle}>{copy['phase4.subheader1']}</div>
    <p className={`${styles.subtext} ${styles.mt0}`}>
      Ensure the code is close to design, closely reviewing interactions and visual design. Design should document
      visual or interaction bugs in Jira or create a design QA document <a className={styles.link} target="_blank" href="https://docs.google.com/spreadsheets/d/1MMqCNwuekumASLel3F9juv9ZJ_l1K22Hg3RiGS7X7Co/edit?usp=sharing">(example)</a>. Engineering and design should
      each prioritize tasks to determine tasks to do before or after GA.
    </p>

    <ResourceBox resource="resource7" />
  </div>
);
