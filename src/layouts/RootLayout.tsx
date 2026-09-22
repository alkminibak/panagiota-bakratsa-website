import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const pageTitles: Record<string, string> = {
  "/": "Παναγιώτα Μπακρατσά | Ψυχολόγος - Ψυχοθεραπεύτρια",
  "/about": "Παναγιώτα Μπακρατσά | Βιογραφικό",
  "/approach": "Παναγιώτα Μπακρατσά | Θεραπευτική Προσέγγιση",
  "/services": "Παναγιώτα Μπακρατσά | Υπηρεσίες",
  "/contact": "Παναγιώτα Μπακρατσά | Επικοινωνία",
};

const canonicalUrls: Record<string, string> = {
  "/": "https://psychologosbakratsa.gr/",
  "/about": "https://psychologosbakratsa.gr/about",
  "/approach": "https://psychologosbakratsa.gr/approach",
  "/services": "https://psychologosbakratsa.gr/services",
  "/contact": "https://psychologosbakratsa.gr/contact",
};

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[location.pathname] ??
      "Παναγιώτα Μπακρατσά | Η σελίδα δεν βρέθηκε";

    const canonicalUrl = canonicalUrls[location.pathname];

    const existingCanonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (canonicalUrl) {
      const canonicalLink = existingCanonical ?? document.createElement("link");

      canonicalLink.rel = "canonical";
      canonicalLink.href = canonicalUrl;

      if (!existingCanonical) {
        document.head.appendChild(canonicalLink);
      }
    } else {
      existingCanonical?.remove();
    }

    const ogUrl = canonicalUrls[location.pathname];

    const existingOgUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]',
    );

    if (ogUrl) {
      const ogUrlMeta = existingOgUrl ?? document.createElement("meta");

      ogUrlMeta.setAttribute("property", "og:url");
      ogUrlMeta.content = ogUrl;

      if (!existingOgUrl) {
        document.head.appendChild(ogUrlMeta);
      }
    } else {
      existingOgUrl?.remove();
    }
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />

      <Header />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
