import React from 'react';
import styles from './PricePage.module.css';
import Tile from '../components/Tile/Tile';
import Button from '../components/Button/Button';
import { ReactComponent as AZLogo } from '../../assests/azlogo.svg';
import { ReactComponent as Graph } from '../../assests/graph.svg';
import BUTTONTHEMES from '../../themes/buttonTheme';
import TILETHEME from '../../themes/tileTheme';
import { FEATURES, STATISTICS } from './constants';
const PricePage = () => {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.graphlogo}>
        <Graph />
      </div>
      <div className={styles.leftContainer}>
        <div className={styles.upper}>
          <p>
            Invest in skills, <br />
            <span> earn 10X </span>
            of what you paid.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.lower}>
          {STATISTICS.map((item, idx) => (
            <Tile idx={idx} childClass={styles.child} theme={TILETHEME.GREY}>
              <p>{item.data}</p>
              <p>{item.text}</p>
            </Tile>
          ))}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.logo}>
          <AZLogo />
        </div>
        <div className={styles.upper}>
          <div className={styles.price}>
            <p className={styles.heading}>Premium Victory Batch</p>
            <p className={styles.original}>₹19,999</p>
            <p className={styles.discounted}>₹13,999</p>
          </div>
        </div>
        <div className={styles.lower}>
          {FEATURES.map((item, idx) => (
            <Tile idx={idx} theme={TILETHEME.BORDERED} maxWidth="100%">
              <p className={styles.tileText}>{item}</p>
            </Tile>
          ))}
          <Button theme={BUTTONTHEMES.WHITE}>
            {' '}
            <p>Join now -&rsaquo;</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
