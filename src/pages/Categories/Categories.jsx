import styles from "./Categories.module.css";

import Heading from "../../ui/Heading/Heading";

import Menu from "../../sections/Menu/Menu";
import { Outlet } from "react-router";

function Categories() {
  return (
    <>
      <div className={styles.categories}>
        <div className="container">
          <Heading type="secondary">Our Projects</Heading>
          <hr className="mb-2" />
          <div className={`${styles.categoriesContainer}`}>
            <Menu />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
