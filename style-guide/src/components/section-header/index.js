import React from 'react';
import styles from './styles.module.css';

export default function SectionHeader({ text, type, content }) {
  return (
    <div className={styles['section-container']}>
      <h2
        className={
          type === 'SectionHeader__small'
            ? styles['section-header-small']
            : styles['section-header']
        }
      >
        {text}
      </h2>
      {content && <div className={styles['section-content']}>{content}</div>}
    </div>
  );
}
