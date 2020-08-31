import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";
import storyMapping2 from "../../assets/storyMapping2.png";

export default ({addHashRoute}) => (
  <>
    <div className={styles.mainContainer}>
      <div className={styles.phase} id="phase2" onClick={() => {
        addHashRoute('phase2')
      }}>{copy["phase2"]}</div>
      <div className={styles.phaseHeader}>{copy['phase2.header']}</div>
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
    </div>

    <img className={styles.illustration} src={storyMapping2} alt="storyMapping"/>
  </>
);
