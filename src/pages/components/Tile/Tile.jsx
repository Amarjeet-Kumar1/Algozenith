import React from 'react';
import styles from './Tile.module.css';
import THEMES from './theme';

const Tile = ({ children, idx, childClass, theme, maxWidth }) => {
  return (
    <div className={styles.tile} key={idx} style={{ maxWidth: maxWidth }}>
      <div className={`${styles.box} ${styles[THEMES[theme]]}`}></div>
      <div className={childClass}>{children}</div>
    </div>
  );
};

export default Tile;
