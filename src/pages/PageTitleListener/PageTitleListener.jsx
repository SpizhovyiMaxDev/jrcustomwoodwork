import { useLocation } from "react-router";
import { useEffect } from "react";

import { capitalizeFirstLetter } from "../../utils/helpers";

function PageTitleListener({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = getPageTitle(pathname);
  }, [pathname]);

  return children;
}

function getPageTitle(pathname) {
  if (pathname === "/not-found") {
    return "J&R Custom Woodwork // 404 Page Not Found";
  }

  if (pathname.length === 1) {
    return "J&R Custom Woodwork // Page Not Found";
  }

  const pathParts = pathname.replaceAll("/", " ").trim().split(" ");

  if (pathParts.length === 2) {
    return formatCategoryTitle(pathParts.at(-1));
  }

  if (pathParts.length > 2) {
    return formatTitle(formatProjectTitle(pathParts.at(-1)));
  }

  return formatTitle(formatPageTitle(pathname));
}

function formatTitle(title) {
  return `J&R Custom Woodwork // ${title}`;
}

function formatPageTitle(pathname) {
  return pathname.slice(1)[0].toUpperCase() + pathname.slice(2);
}

function formatCategoryTitle(category) {
  return formatTitle(`${capitalizeFirstLetter(category)} Projects, Kelowna`);
}

function formatProjectTitle(projectTitle) {
  const titleParts = projectTitle.split("-");
  const formattedParts = titleParts.map((part, index) =>
    index === titleParts.length - 1 ? `#${part}` : capitalizeFirstLetter(part)
  );
  return formattedParts.join(" ").trim();
}

export default PageTitleListener;
