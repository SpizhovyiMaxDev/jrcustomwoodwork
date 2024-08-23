import styles from "./Footer.module.css";
import Heading from "../../ui/Heading/Heading";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <Heading type="secondary" className={`${styles.footerHeading} mb-1`}>
            Follow Us on Social
          </Heading>

          <p className={`${styles.footerTextContent} mb-2`}>
            Follow us on
            <a
              target="_blank"
              href=" https://www.instagram.com/reshetov.igor.9/?igsh=MTZuMzRkanpuejdxbg%3D%3D"
              rel="noreferrer"
              aria-label="Instagram page"
              className={styles.footerLink}
            >
              Instagram
            </a>
            <br className={styles.breakOnSmall} />
            and
            <a
              target="_blank"
              href="https://www.facebook.com/jr.customwoodwork.ltd"
              rel="noreferrer"
              aria-label="Facebook page"
              className={styles.footerLink}
            >
              Facebook
            </a>
            to see what's new.
          </p>

          <p className={styles.footerTextContent}>
            Web Development by
            <a
              target="_blank"
              rel="noreferrer"
              href="https://maxweb.studio"
              aria-label="Developer of the website"
              className={styles.footerLink}
            >
              Max Spizhovyi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
