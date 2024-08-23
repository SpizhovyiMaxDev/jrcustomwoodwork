import { useEffect } from "react";
import { useLocation } from "react-router";

function GoogleAnalytics({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.gtag("config", "G-L7BS9NGZ57", {
      page_name: document.title,
      page_path: pathname,
    });
  }, [pathname]);

  return children;
}

export default GoogleAnalytics;
