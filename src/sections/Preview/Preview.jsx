import styles from "./Preview.module.css";

import Heading from "../../ui/Heading/Heading";
import Picture from "../../ui/Picture/Picture";

function Preview() {
  return (
    <section className={styles.preview}>
      <div className="container">
        <Heading type="primary" className="mb-2">
          Since 1997
        </Heading>

        <Picture
          srcSet={[
            "/imgs/sections/preview/preview-480.webp",
            "/imgs/sections/preview/preview-768.webp",
            "/imgs/sections/preview/preview-1200.webp",
            "/imgs/sections/preview/preview-1400.webp",
            "/imgs/sections/preview/preview-1600.webp",
            "/imgs/sections/preview/preview-1920.webp",
          ]}
          mediaQueries={[
            "(max-width: 480px)",
            "(max-width: 768px)",
            "(max-width: 1200px)",
            "(max-width: 1400px)",
            "(max-width: 1600px)",
            "(max-width: 1920px)",
          ]}
          alt="Full Story of J&R Custom Woodwork LDT"
          wrapperStyles={`${styles.aspectRatio} mb-2`}
        />

        <Heading
          type="primary--flex"
          children={["J&R", "Custom", "Woodwork"]}
        />
      </div>
    </section>
  );
}

export default Preview;
