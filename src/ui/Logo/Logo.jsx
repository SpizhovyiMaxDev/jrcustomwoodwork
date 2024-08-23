import Heading from "../Heading/Heading";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

function Logo({ setOpenNav }) {
  return (
    <Link
      to="/home"
      className={`${styles.logotype}`}
      onClick={() => setOpenNav(false)}
    >
      <Heading type="tertiary">J&R</Heading>
    </Link>
  );
}

export default Logo;
