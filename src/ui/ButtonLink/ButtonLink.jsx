import styles from "./ButtonLink.module.css";
import { NavLink, Link } from "react-router-dom";

function ButtonLink({ path, type, active = false, className = "", children }) {
  const Component = active ? NavLink : Link;

  return (
    <Component to={path} className={`${styles[type]} ${className}`}>
      {children}
    </Component>
  );
}

export default ButtonLink;
