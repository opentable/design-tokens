import React from 'react';
import styles from './styles.module.css';

export default function SectionHeader({ text, type }) {
  return (
    <h2
      className={
        type === 'SectionHeader__small'
          ? styles['section-header-small']
          : styles['section-header']
      }
    >
      {text}
    </h2>
  );
}
