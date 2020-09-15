import React from 'react';
import styles from './styles.module.scss';

export default function SectionHeader({ text, type, content, className = '' }) {
  const headerClassName = type === 'SectionHeader__small'
    ? styles.sectionHeaderSmall
    : styles.sectionHeader;
  return (
    <div className={`${styles.sectionContainer} ${className}`}>
      <h2 className={headerClassName}>
        {text}
      </h2>
      {content && <div className={styles.sectionContent}>{content}</div>}
    </div>
  );
}
