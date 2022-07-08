import styles from './EmailContainer.module.scss';

const EmailContainer = () => {
  return (
    <div className={styles.mailContainer}>
      <div className={styles.mailTitle}>Save time, save money!</div>
      <span className={styles.mailDescription}>
        Sign up and we'll send the best deals to you
      </span>
      <div className={styles.mailInputContainer}>
        <input type='text' placeholder='Enter your email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default EmailContainer;
