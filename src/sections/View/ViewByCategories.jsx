import styles from "./ViewByCategories.module.css";

import Heading from "../../ui/Heading/Heading";
import ViewCategoryItem from "./ViewCategoryItem";

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
          <ViewCategoryItem
            imageSrcSet={[
              "/imgs/sections/view/wardrobes/480/kelowna-custom-wardrobe-cabinets-1.webp",
              "/imgs/sections/view/wardrobes/768/kelowna-custom-wardrobe-cabinets-1.webp",
            ]}
            mediaQueries={["(max-width: 480px)", "(max-width:768px)"]}
            typeOfRatio="square"
            alt="Kelowna custom wardrobes"
            category="Wardrobes"
            linkPath="/categories/wardrobes"
          />

          <ViewCategoryItem
            imageSrcSet={[
              "/imgs/sections/view/bathrooms/480/kelowna-custom-bathroom-title-1.webp",
              "/imgs/sections/view/bathrooms/768/kelowna-custom-bathroom-title-1.webp",
            ]}
            mediaQueries={["(max-width: 480px)", "(max-width:768px)"]}
            typeOfRatio="portrait"
            alt="Kelowna custom bathrooms"
            category="Bathrooms"
            linkPath="/categories/bathrooms"
          />
        </div>
      </div>
    </section>
  );
}

export default ViewByCategories;
