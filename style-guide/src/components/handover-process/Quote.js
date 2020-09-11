import React from "react";
import copy from '../../../static/handover-process';
import styles from '../../styles/handover.module.scss';

export default ({title}) => (
  <div>
    <div className={styles.quote}>
      “
    </div>
    <div className={styles.quoteTitle}>{copy[title]}</div>
    <div className={styles.quoteUser}>- {copy[`${title}.user`]}</div>
  </div>
)
