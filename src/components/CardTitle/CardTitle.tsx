import styles from './CardTitle.module.css';

export const CardTitle: React.FC = ({ children }) => (
  <div className={styles.wrapper}>
    <span className={styles.text}>{children}</span>
  </div>
);
