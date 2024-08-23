import styles from "./FullStory.module.css";

import Heading from "../../ui/Heading/Heading";
import Picture from "../../ui/Picture/Picture";

function FullStory() {
  return (
    <section className={styles.fullStory}>
      <div className="container">
        <div className={styles.fullStoryContainer}>
          <div>
            <Heading type="secondary" className="mb-2">
              Our Story
            </Heading>
            <p className="description">
              J&R Custom Woodwork began its journey in 1997, born out of a
              passion for transforming the heart of the home — the kitchen.This
              adventure began with being inspired by the joy of creating
              furniture for my own family, as well as a deep love of
              woodworking, a craft passed down from my father. In each piece, I
              strive to combine functionality and beauty, creating pieces that
              not only serve their purpose, but also tell their story. From
              humble beginnings to a thriving business, the commitment to
              quality and craftsmanship remains unwavering. Every kitchen
              created is a testament to dedication and love for the art of
              material craftsmanship, bringing families together in spaces
              designed to be cherished for years to come.
            </p>
          </div>

          <Picture
            src="/imgs/sections/history/fireplace-1400.webp"
            srcSet={[
              "/imgs/sections/history/fireplace-480.webp",
              "/imgs/sections/history/fireplace-768.webp",
              "/imgs/sections/history/fireplace-1200.webp",
              "/imgs/sections/history/fireplace-1400.webp",
            ]}
            mediaSizes={[
              "(max-width: 480px)",
              "(max-width: 768px)",
              "(max-width: 1200px)",
              "(max-width: 1400px) 1400px",
            ]}
            alt="Full Story of J&R Custom Woodwork LDT"
            wrapperStyles={`${styles.aspectRatio} ${styles.fullStoryPicture}`}
          />

          <Picture
            src="/imgs/sections/history/philosophy-1400.webp"
            srcSet={[
              "/imgs/sections/history/philosophy-480.webp",
              "/imgs/sections/history/philosophy-768.webp",
              "/imgs/sections/history/philosophy-1200.webp",
              "/imgs/sections/history/philosophy-1400.webp",
            ]}
            mediaSizes={[
              "(max-width: 480xpx)",
              "(max-width: 768px)",
              "(max-width: 1200px)",
              "(max-width: 1400px) 1400px",
            ]}
            alt="Philosophy of J&R Custom Woodwork LDT"
            wrapperStyles={`${styles.aspectRatio} ${styles.fullStoryPicture}`}
          />

          <div>
            <Heading type="secondary" className="mb-2">
              Our Philosophy
            </Heading>
            <p className="description">
              At J&R Custom Woodwork, we believe that the kitchen is more than
              just a room — it's the soul of the home. It’s where families
              gather, where friends meet, and where memories are made. This
              space should be warm and inviting, a place that nourishes both
              body and spirit. We strive to create areas that are not only
              practical and convenient for preparing meals but also exude
              comfort and joy. Every element is crafted with the intent to make
              every visit a delightful experience. Whether you're making a grand
              feast or simply brewing a cup of coffee, your cooking area should
              make you feel great. Our philosophy is rooted in the belief that a
              well-designed environment enhances the quality of life, making
              everyday moments special.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullStory;
