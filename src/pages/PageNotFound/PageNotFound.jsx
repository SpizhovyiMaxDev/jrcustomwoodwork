import styles from "./PageNotFound.module.css";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <div className="container">
        <p className={`${styles.errorMessage} mb-2`}>
          This page could not be found.
        </p>
        <ButtonLink path="/home" type="secondary">
          Back to Home
        </ButtonLink>
      </div>
    </div>
  );
}

export default PageNotFound;
