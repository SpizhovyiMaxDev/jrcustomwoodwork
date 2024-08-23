import styles from "./Breadcrumbs.module.css";

import ButtonLink from "../../ui/ButtonLink/ButtonLink";

function Breadcrumbs({ category }) {
  return (
    <div className={`${styles.breadcrumbs} mb-2`}>
      <ButtonLink path="/categories/all" type="tertiary">
        All
      </ButtonLink>
      <span>/</span>
      <ButtonLink path={`/categories/${category}`} type="tertiary">
        {category[0].toUpperCase() + category.slice(1)}
      </ButtonLink>
    </div>
  );
}

export default Breadcrumbs;
