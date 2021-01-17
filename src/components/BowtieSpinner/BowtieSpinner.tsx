import { useRef } from 'react';

import styles from './BowtieSpinner.module.css';

const BOWTIE_WIDTH = 64;
const BOWTIE_HEIGHT = 64;
const ROW_GAP = 67;
const COLUMN_GAP = 128;

const ROWS = Math.ceil(1080 / (BOWTIE_HEIGHT + ROW_GAP)) + 1;
const COLUMNS = Math.ceil(1920 / (BOWTIE_WIDTH + COLUMN_GAP)) + 1;

export const BowtieSpinner = () => {
  const canvas = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.canvas} ref={canvas}>
      {[...Array(ROWS)].map((_, row) => {
        const isOffset = row % 2 === 1;

        return (
          <div
            className={`${styles.row} ${isOffset ? styles.rowOffset : ''}`}
            key={row}>
            {[...Array(isOffset ? COLUMNS + 2 : COLUMNS)].map((_, column) => (
              <div className={styles.column} key={column}>
                <Bowtie />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const Bowtie = () => (
  <img src='/images/bowtie.png' className={styles.bowtie} alt='' />
);
