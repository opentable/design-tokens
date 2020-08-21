import React from 'react';
import styles from './styles.module.scss';

export default function SectionHeader({ text, type, content }) {
  return (
    <div className={styles.sectionContainer}>
      <h2
        className={
          type === 'SectionHeader__small'
            ? styles.sectionHeaderSmall
            : styles.sectionHeader
        }
      >
        {text}
      </h2>
      {content && <div className={styles.sectionContent}>{content}</div>}
    </div>
  );
}
