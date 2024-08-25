import styles from "./Breadcrumbs.module.css";

import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Breadcrumbs({ category }) {
  return (
    <div className={`${styles.breadcrumbs} mb-2`}>
      <ButtonLink path="/categories/all" type="tertiary">
        All
      </ButtonLink>
      <span>/</span>
      <ButtonLink path={`/categories/${category}`} type="tertiary">
        {capitalizeFirstLetter(category)}
      </ButtonLink>
    </div>
  );
}

export default Breadcrumbs;
