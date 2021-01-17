import styles from './VideoBoundingBox.module.css';

export const VideoBoundingBox: React.FC = ({ children }) => (
  <div className={styles.boundingBox}>{children}</div>
);
