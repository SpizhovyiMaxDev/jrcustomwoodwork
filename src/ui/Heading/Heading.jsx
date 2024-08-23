import styles from "./Heading.module.css";

const headingMap = new Map([
  ["primary", "h1"],
  ["primary--flex", "h1"],
  ["secondary", "h2"],
  ["tertiary", "h3"],
]);

function Heading({ type, className = "", children }) {
  const HtmlHeading = headingMap.get(type) || "h1";

  return (
    <HtmlHeading className={`${styles[type]} ${className}`}>
      {type === "primary--flex"
        ? children.map((text, index) => <span key={index}>{text}</span>)
        : children}
    </HtmlHeading>
  );
}

export default Heading;
