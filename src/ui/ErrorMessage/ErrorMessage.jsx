import styles from "./ErrorMessage.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function ErrorMessage({ message, path }) {
  return (
    <div className={styles.error}>
      <p className={`${styles.errorMessage} mb-2`} role="alert">
        {message}
      </p>

      <ButtonLink path={path} type="secondary">
        Visist our current projects
      </ButtonLink>
    </div>
  );
}

export default ErrorMessage;
