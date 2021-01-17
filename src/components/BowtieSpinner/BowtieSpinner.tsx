import { useEffect, useRef, useState } from 'react';

import styles from './BowtieSpinner.module.css';

const BOWTIE_WIDTH = 64;
const BOWTIE_HEIGHT = 64;
const ROW_GAP = 64;
const COLUMN_GAP = 128;

export const BowtieSpinner = () => {
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const { width, height } = canvas.current.getBoundingClientRect();
    setRows(Math.ceil(height / (BOWTIE_HEIGHT + ROW_GAP)) + 1);
    setColumns(Math.ceil(width / (BOWTIE_WIDTH + COLUMN_GAP)) + 1);
  }, [canvas]);

  console.log(rows, columns);

  return (
    <div className={styles.canvas} ref={canvas}>
      {[...Array(rows)].map((_, row) => {
        const isOffset = row % 2 === 1;

        return (
          <div
            className={`${styles.row} ${isOffset ? styles.rowOffset : ''}`}
            key={row}>
            {[...Array(isOffset ? columns + 2 : columns)].map((_, column) => (
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
