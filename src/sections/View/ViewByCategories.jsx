import styles from "./ViewByCategories.module.css";

import Heading from "../../ui/Heading/Heading";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import Picture from "../../ui/Picture/Picture";

function ViewByCategories() {
  return (
    <section className={styles.categoriesView}>
      <div className="container">
        <Heading type="secondary" className="text-center mb-6">
          View By Categories
        </Heading>
      </div>

      <div className="container">
        <div className={styles.categoriesViewContainer}>
          <div className={styles.categoriesViewItem}>
            <Picture
              srcSet={[
                "/imgs/sections/view/wardrobes/480/kelowna-custom-wardrobe-cabinets-1.webp",
                "/imgs/sections/view/wardrobes/768/kelowna-custom-wardrobe-cabinets-1.webp",
                "/imgs/sections/view/wardrobes/1200/kelowna-custom-wardrobe-cabinets-1.webp",
              ]}
              mediaSizes={["(max-width: 480px)", "(max-width:768px)"]}
              wrapperStyles={`mb-2  ${styles.aspectRatio1}`}
              alt="Kelowna custom wardrobes"
            />

            <Heading type="tertiary" className="mb-1">
              Wardrobes
            </Heading>

            <ButtonLink type="primary" path="/categories/wardrobes">
              View Wardrobes
            </ButtonLink>
          </div>

          <div className={styles.categoriesViewItem}>
            <Picture
              src="/imgs/sections/view/bathrooms/480/kelowna-custom-bathroom-title-1.webp"
              srcSet={[
                "/imgs/sections/view/bathrooms/480/kelowna-custom-bathroom-title-1.webp",
                "/imgs/sections/view/bathrooms/768/kelowna-custom-bathroom-title-1.webp",
                "/imgs/sections/view/bathrooms/1200/kelowna-custom-bathroom-title-1.webp",
              ]}
              mediaSizes={[
                "(max-width:480px)",
                "(max-width:768px)",
                "(max-width:1200px)",
              ]}
              wrapperStyles={`mb-2 ${styles.aspectRatio2}`}
              alt="Kelowna custom bathrooms"
            />

            <Heading type="tertiary" className="mb-1">
              Bathrooms
            </Heading>

            <ButtonLink type="primary" path="/categories/bathrooms">
              View Bathrooms
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewByCategories;
