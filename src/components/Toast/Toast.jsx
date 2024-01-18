// Toast.jsx
import React from 'react';
import styles from './Toast.module.scss';

export const Toast = ({ message, type, onClose }) => {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <p>{message}</p>
      <button className={styles.closeButton} onClick={onClose}>
        Jeg ved det
      </button>
    </div>
  );
};

