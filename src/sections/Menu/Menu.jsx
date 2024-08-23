import styles from "./Menu.module.css";

import { menu } from "../../data/menu";

import ButtonLink from "../../ui/ButtonLink/ButtonLink";

function Menu() {
  return (
    <menu>
      <ul className={styles.menuList}>
        {menu.map((item) => {
          return (
            <li className={styles.menuItem} key={item.id}>
              <ButtonLink type="tertiary" path={item.path} active={true}>
                {item.linkName}
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </menu>
  );
}

export default Menu;
