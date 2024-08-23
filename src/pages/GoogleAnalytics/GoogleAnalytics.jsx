import { useEffect } from "react";
import { useLocation } from "react-router";

function GoogleAnalytics({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.gtag("config", "G-G0CMBG4645", {
      page_name: document.title,
      page_path: pathname,
    });
  }, [pathname]);

  return children;
}

export default GoogleAnalytics;
