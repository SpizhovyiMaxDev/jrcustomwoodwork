import styles from "./PageLoader.module.css";

function PageLoader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default PageLoader;
