import React from 'react';
import styles from './Home.module.css';
import { ReactComponent as HeroLogo } from '../../assests/hero.svg';
import BUTTONTHEMES from '../../themes/buttonTheme';
import Button from '../components/Button/Button';
import Tile from '../components/Tile/Tile';
import TILETHEME from '../../themes/tileTheme';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.upper}>
          <p className={styles.title}>Be better at DSA & CP</p>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className={styles.buttonContainer}>
            <Button theme={BUTTONTHEMES.WHITE}>
              <p>Join now -&rsaquo;</p>
            </Button>
            <Button theme={BUTTONTHEMES.COLOR}>
              <p>View curriculum</p>
            </Button>
          </div>
        </div>
        <div className={styles.lower}>
          {[...Array(4).keys()].map((idx) => (
            <Tile idx={idx} theme={TILETHEME.BORDERED}>
              <p className={styles.tileText}>Lorem ipsum dolor sit amet</p>
            </Tile>
          ))}
        </div>
      </div>
      <div className={styles.rightContainer}>
        <HeroLogo />
      </div>
    </div>
  );
};

export default Home;
