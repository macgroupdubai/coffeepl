import styles from './PageLoader.module.css';
import logo from '../../assets/logo.png'; // adjust path if needed

const PageLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="CoffeePL Logo" className={styles.logo} />
        <div className={styles.fillEffect}></div>
      </div>
    </div>
  );
};

export default PageLoader;
