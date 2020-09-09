import styles from "../../styles/handover.module.scss";
import copy from "../../../static/handover-process";
import React from "react";
import PhaseHeader from "./PhaseHeader";
import ResourceBox from "./ResourceBox";
import Quote from "./Quote";

export default ({addHashRoute}) => (
  <div className={styles.mainContainer}>
    <PhaseHeader
      addHashRoute={() => addHashRoute('phase3')}
      phase='phase3'
    />
    <div className={styles.phaseTitle}>{copy['phase3.subheader1']}</div>
    <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase3.description1']}</p>

    <div className={styles.content}>
      <div className={styles.phaseListTitle}>{copy['phase3.header1.list1.title']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase3.header1.list1.desc']}</p>
      <ul className={styles.phaseList}>
        <li>{copy['phase3.header1.list1.1']}</li>
        <li>{copy['phase3.header1.list1.2']}</li>
        <li>{copy['phase3.header1.list1.3']}</li>
        <li>{copy['phase3.header1.list1.4']}</li>
        <li>{copy['phase3.header1.list1.5']}</li>
        <li>{copy['phase3.header1.list1.6']}</li>
        <li>{copy['phase3.header1.list1.7']}</li>
      </ul>
    </div>

    <div className={styles.content}>
      <div className={styles.phaseListTitle}>{copy['phase3.header1.list2.title']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase3.header1.list2.desc']}</p>
    </div>

    <div className={styles.content}>
      <div className={styles.phaseListTitle}>{copy['phase3.header1.list3.title']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase3.header1.list3.desc']}</p>
    </div>

    <div className={styles.flex}>
      <ResourceBox resource="resource5" />
      <ResourceBox resource="resource6" />
    </div>


    <Quote title="quote2" />

    <div className={styles.phaseTitle}>{copy['phase3.subheader2']}</div>
    <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase3.description2']}</p>

    <div className={styles.content}>
      <div className={styles.phaseListTitle}>{copy['phase3.header2.list1.title']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase3.header2.list1.desc']}</p>
    </div>

    <div className={styles.content}>
      <div className={styles.phaseListTitle}>{copy['phase3.header2.list2.title']}</div>
      <p className={`${styles.subtext} ${styles.mt0}`}>{copy['phase3.header2.list2.desc']}</p>
    </div>
  </div>
);
