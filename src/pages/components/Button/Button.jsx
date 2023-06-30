import React from 'react';
import styles from './Button.module.css';
import THEMES from './theme';

const Button = ({ children, theme }) => {
  return (
    <div className={`${styles.button} ${styles[THEMES[theme]]}`}>
      {children}
    </div>
  );
};

export default Button;
