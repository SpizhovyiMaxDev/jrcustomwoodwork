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
              "/imgs/sections/hero/hero-480.webp 480w",
              "/imgs/sections/hero/hero-768.webp 768w",
              "/imgs/sections/hero/hero-1200.webp 1200w",
              "/imgs/sections/hero/hero-1400.webp 1400w",
            ]}
            mediaSizes={[
              "(max-width: 480px)",
              "(max-width: 768px)",
              "(max-width: 1200px)",
              "(max-width:1400px)",
            ]}
            alt="Modern kitchen projects"
            wrapperStyles={`mb-2 rounded--11 ${styles.aspectRatio}`}
          />

          <Heading type="tertiary">
            Collection 01 -&nbsp;
            <Link to="/categories/kitchens" className={styles.heroLink}>
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
