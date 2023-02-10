import styles from './notification.module.css';

const Notification = ({ message }) => {
  return <span className={styles.text}>{message}</span>;
};

export default Notification;
