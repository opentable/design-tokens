import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";
import PhaseHeader from "./PhaseHeader";
import ResourceBox from "./ResourceBox";

export default ({addHashRoute}) => (
  <>
    <div className={styles.mainContainer}>
      <PhaseHeader
        addHashRoute={() => addHashRoute('phase2')}
        phase='phase2'
      />
      <div className={styles.phaseTitle}>{copy['phase2.subheader1']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase2.description1']}</p>

      <div className={styles.phaseListTitle}>{copy['phase2.header1.list1.title']}</div>
      <ul className={styles.phaseList}>
        <li>{copy['phase2.header1.list1.1']}</li>
        <li>{copy['phase2.header1.list1.2']}</li>
        <li>{copy['phase2.header1.list1.3']}</li>
      </ul>

      <div className={styles.content}>
        <div className={styles.phaseListTitle}>{copy['phase2.header1.list2.title']}</div>
        <ul className={styles.phaseList}>
          <li>{copy['phase2.header1.list2.1']}</li>
          <li>{copy['phase2.header1.list2.2']}</li>
          <li>{copy['phase2.header1.list2.3']}</li>
          <li>{copy['phase2.header1.list2.4']}</li>
          <li>{copy['phase2.header1.list2.5']}</li>
          <li>{copy['phase2.header1.list2.6']}</li>
        </ul>
      </div>

      <div className={styles.phaseTitle}>{copy['phase2.subheader2']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase2.description2']}</p>

      <div className={styles.content}>
        <div className={styles.phaseListTitle}>{copy['phase2.header2.list1.title']}</div>
        <ul className={styles.phaseList}>
          <li>{copy['phase2.header2.list1.1']}</li>
          <li>{copy['phase2.header2.list1.2']}</li>
          <li>{copy['phase2.header2.list1.3']}</li>
        </ul>
      </div>

      <ResourceBox resource="resource3" />

      <div className={styles.phaseTitle}>{copy['phase2.subheader3']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase2.description3']}</p>

      <ResourceBox resource="resource4" />

    </div>
  </>
);
