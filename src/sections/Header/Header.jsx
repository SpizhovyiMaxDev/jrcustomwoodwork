import styles from "./Header.module.css";
import { useState } from "react";

import Navigation from "./Navigation";
import Logo from "../../ui/Logo/Logo";

function Header() {
  const [navOpen, setOpenNav] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo setOpenNav={setOpenNav} />

        <Navigation navOpen={navOpen} setOpenNav={setOpenNav} />

        <button
          onClick={() => setOpenNav((open) => !open)}
          className={styles.hamburger}
          aria-label="Hmburger menu"
        >
          <svg width="40px" height="40px">
            <use
              href={`/icons.svg#icon-hamburger-${navOpen ? "close" : "open"}`}
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
