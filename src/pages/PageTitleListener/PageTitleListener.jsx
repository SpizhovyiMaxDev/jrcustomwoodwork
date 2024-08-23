import { useLocation } from "react-router";

function formatTitle(title) {
  return `J&R Custom Woodwork // ${title}`;
}

function formatProjectTitle(title) {
  const titleParts = title.split("-");
  const lastIndex = titleParts.length - 1;

  return titleParts
    .reduce((acc, val, index) => {
      if (index === lastIndex) {
        return `${acc} #${val}`;
      } else {
        return `${acc} ${
          val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
        }`;
      }
    }, "")
    .trim();
}

function PageTitleListener({ children }) {
  const { pathname } = useLocation();

  if (pathname.length === 1) {
    document.title = "J&R Custom Woodwork // Page Not Found";
    return children;
  }

  const pageTitle = pathname.slice(1);
  const pathParts = pathname.replaceAll("/", " ").trim().split(" ");

  if (!pathname.includes("categories")) {
    const formattedTitle = pageTitle[0].toUpperCase() + pageTitle.slice(1);
    document.title = formatTitle(`${formattedTitle} page`);
  }

  if (pathParts.length === 2) {
    const categoryTitle = pathParts.at(-1);
    document.title = formatTitle(
      `${
        categoryTitle.at(0).toUpperCase() + categoryTitle.slice(1)
      } Projects, Kelowna`
    );
  }

  if (pathParts.length > 2) {
    const projectTitle = pathParts.at(-1);
    document.title = formatTitle(formatProjectTitle(projectTitle));
  }

  return children;
}

export default PageTitleListener;
