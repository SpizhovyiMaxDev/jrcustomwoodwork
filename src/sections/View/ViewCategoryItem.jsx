import styles from "./ViewCategoryItem.module.css";

import Picture from "../../ui/Picture/Picture";
import Heading from "../../ui/Heading/Heading";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";

function ViewCategoryItem({
  imageSrcSet = [],
  mediaQueries = [],
  typeOfRatio = "",
  category = "",
  linkPath = "",
  alt = "",
}) {
  const aspectRatio =
    typeOfRatio === "square"
      ? styles.squareAspectRatio
      : styles.portraitAspectRatio;

  return (
    <div className={styles.categoriesViewItem}>
      <Picture
        srcSet={imageSrcSet}
        mediaQueries={mediaQueries}
        wrapperStyles={`mb-2  ${aspectRatio}`}
        alt={alt}
      />

      <Heading type="tertiary" className="mb-1">
        {category}
      </Heading>

      <ButtonLink type="primary" path={linkPath}>
        View {category}
      </ButtonLink>
    </div>
  );
}

export default ViewCategoryItem;
