import styles from "./Poster.module.css";

import Picture from "../../ui/Picture/Picture";

function Poster() {
  return (
    <section className={styles.decor}>
      <Picture
        srcSet={[
          "/imgs/sections/poster/poster-480.webp",
          "/imgs/sections/poster/poster-768.webp",
          "/imgs/sections/poster/poster-1200.webp",
          "/imgs/sections/poster/poster-1600.webp",
          "/imgs/sections/poster/poster-2000.webp",
          "/imgs/sections/poster/poster-2400.webp",
        ]}
        mediaQueries={[
          "(max-width: 480px)",
          "(max-width: 768px)",
          "(max-width: 1200px)",
          "(max-width: 1600px)",
          "(max-width: 2000px)",
          "(max-width:2400px)",
        ]}
        alt="Modern kitchen projects, Kelowna BC."
        wrapperStyles={styles.aspectRatio}
      />
    </section>
  );
}

export default Poster;
