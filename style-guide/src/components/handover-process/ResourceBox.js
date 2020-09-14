import React from "react";
import { BullseyeIcon } from "./Bullseye";
import copy from '../../../static/handover-process';
import styles from '../../styles/handover.module.scss';

export default ({ resource }) => (
  <div className={styles.resource} onClick={() => { window.open(copy[`${resource}.link`], '_blank')}}>
    <div className={styles.resourceTitle}>
      <BullseyeIcon />
      <div>{copy[`${resource}.title`]}</div>
    </div>
    <div className={styles.resourceDesc}>{copy[`${resource}.description`]}</div>
    <div className={styles.resourceLink}>{copy[`${resource}.linkTitle`]}</div>
  </div>
)
