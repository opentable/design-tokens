import React from 'react';
import styles from './styles.module.css';

export default function SectionHeader({ text }) {
  return <h2 className={styles['section-header']}>{text}</h2>;
}
