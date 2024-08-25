import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

import Heading from "../../ui/Heading/Heading";
import Picture from "../../ui/Picture/Picture";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContainer}>
          <Picture
            src={"/imgs/sections/hero/hero-1400.webp"}
            srcSet={[
              "/imgs/sections/hero/hero-480.webp",
              "/imgs/sections/hero/hero-768.webp",
              "/imgs/sections/hero/hero-1200.webp",
              "/imgs/sections/hero/hero-1400.webp",
            ]}
            mediaQueries={[
              "(max-width: 480px)",
              "(max-width: 768px)",
              "(max-width: 1200px)",
              "(max-width:1400px)",
            ]}
            wrapperStyles={`mb-2 rounded--11 ${styles.aspectRatio}`}
            alt="Modern kitchen projects"
          />

          <Heading type="tertiary">
            Collection 01 -&nbsp;
            <Link to="/categories/kitchens" className={styles.collectionLink}>
              Kitchens
            </Link>
          </Heading>
        </div>

        <Heading
          type="primary--flex"
          children={["J&R", "Custom", "Woodwork"]}
        />
      </div>
    </section>
  );
}

export default Hero;
