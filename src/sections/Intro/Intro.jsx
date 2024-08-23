import styles from "./Intro.module.css";
import Heading from "../../ui/Heading/Heading";
import Picture from "../../ui/Picture/Picture";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";

function Story() {
  return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.introContainer}>
          <Picture
            srcSet={[
              "/imgs/sections/history/intro-480.webp",
              "/imgs/sections/history/intro-768.webp",
              "/imgs/sections/history/intro-1200.webp",
              "/imgs/sections/history/intro-1400.webp",
            ]}
            mediaSizes={[
              "(max-width: 425px)",
              "(max-width: 768px)",
              "(max-width: 1200px)",
              "(max-width: 1400px)",
            ]}
            alt="Sotry vibe"
            wrapperStyles={`${styles.aspectRatio} rounded--11`}
          />

          <div className={styles.introTextContainer}>
            <Heading type="secondary" customStyles="mb-1">
              Our Story
            </Heading>

            <p className="description mb-2">
              J&R Custom Woodwork began its journey in 1997, born out of a
              passion for transforming the heart of the home—the kitchen.This
              adventure began with being inspired by the joy of creating
              furniture for my own family, as well as a deep love of
              woodworking…
            </p>

            <ButtonLink path="/about" type="secondary">
              Read more
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
