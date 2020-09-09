import React from "react";
import { BullseyeIcon } from "./Bullseye";
import copy from '../../../static/handover-process';
import styles from '../../styles/handover.module.scss';

export default ({ resource }) => (
  <div className={styles.resource}>
    <div className={styles.resourceTitle}>
      <BullseyeIcon />
      <div>{copy[`${resource}.title`]}</div>
    </div>
    <div className={styles.resourceDesc}>{copy[`${resource}.description`]}</div>
    <a className={styles.resourceLink} href={copy[`${resource}.link`]} target="_blank">{copy[`${resource}.linkTitle`]}</a>
  </div>
)
