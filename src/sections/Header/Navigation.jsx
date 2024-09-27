import styles from "./Navigation.module.css";

import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

function Navigation({ navOpen, setOpenNav }) {
  function deferCloseNav() {
    setTimeout(() => setOpenNav((open) => !open), 320);
  }

  return (
    <nav
      className={`${styles.mainNav} ${
        navOpen ? styles.navOpen : styles.closeNav
      }`}
    >
      <ul className={styles.mainNavList}>
        {navigation.map((link) => (
          <li key={link.id} onClick={deferCloseNav}>
            <NavLink to={link.path} className={styles.mainNavLink}>
              {link.linkName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
