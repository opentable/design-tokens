import React from 'react';
import styles from '../../styles/handover.module.scss';

export default ({illustration, description, title, addHashRoute}) => (
  <div className={styles.box} onClick={addHashRoute}>
    <img src={illustration} alt="Phase illustration" />
    <div className={styles.boxTitle}>{title}</div>
    <div className={styles.boxDesc}>{description}</div>
  </div>
)
