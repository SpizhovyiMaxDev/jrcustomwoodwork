import styles from "./Kitchens.module.css";
import Heading from "../../ui/Heading/Heading";
import Picture from "../../ui/Picture/Picture";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";

function Kitchens() {
  return (
    <section className={styles.kitchens}>
      <div className="container">
        <div className={styles.kitchensContainer}>
          <div>
            <Heading
              type="primary--flex"
              className="mb-1"
              children={["Our", "Kitchens"]}
            />

            <ButtonLink type="primary" path="/categories/kitchens">
              View Kitchens
            </ButtonLink>
          </div>

          <Picture
            srcSet={[
              "/imgs/sections/kitchens/kitchens-480.webp",
              "/imgs/sections/kitchens/kitchens-768.webp",
              "/imgs/sections/kitchens/kitchens-1200.webp",
              "/imgs/sections/kitchens/kitchens-1400.webp",
              "/imgs/sections/kitchens/kitchens-1600.webp",
            ]}
            mediaQueries={[
              "(max-width: 480px)",
              "(max-width: 768px)",
              "(max-width: 1200px)",
              "(max-width: 1400px)",
              "(max-width: 1600px)",
            ]}
            alt="Contemporary kitchen designs by J&R Custom Woodwork in Kelowna, BC."
            wrapperStyles={styles.aspectRatio}
          />
        </div>
      </div>
    </section>
  );
}

export default Kitchens;
