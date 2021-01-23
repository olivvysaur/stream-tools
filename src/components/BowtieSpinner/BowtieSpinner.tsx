import { useEffect, useRef } from 'react';

import styles from './BowtieSpinner.module.css';

const BOWTIE_WIDTH = 64;
const BOWTIE_HEIGHT = 64;
const ROW_GAP = 67;
const COLUMN_GAP = 128;

const ROWS = Math.ceil(1080 / (BOWTIE_HEIGHT + ROW_GAP));
const COLUMNS = Math.ceil(1920 / (BOWTIE_WIDTH + COLUMN_GAP)) + 1;

export const BowtieSpinner = () => {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const bowtieCollection = canvas.current.getElementsByClassName(
      styles.bowtie
    );
    const allBowties: HTMLImageElement[] = [];

    for (let i = 0; i < bowtieCollection.length; i++) {
      allBowties.push(bowtieCollection[i] as HTMLImageElement);
    }

    const bowties = allBowties.filter((bowtie) => {
      const { top, left, right, bottom } = bowtie.getBoundingClientRect();
      return top < 1080 && left < 1920 && right > 0 && bottom > 0;
    });

    setInterval(() => {
      const chosenIndex = Math.floor(Math.random() * bowties.length);
      const chosenBowtie = bowties[chosenIndex] as HTMLImageElement;

      chosenBowtie.classList.add(styles.spinning);
      if (Math.random() < 0.25) {
        chosenBowtie.classList.add(styles.reverse);
      }

      setTimeout(() => {
        chosenBowtie.classList.remove(styles.spinning);
        chosenBowtie.classList.remove(styles.reverse);
      }, 1500);
    }, 2000);
  }, [canvas]);

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
