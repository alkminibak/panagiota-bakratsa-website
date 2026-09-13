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

const RootLayout = () => {
  const location = useLocation();

  useEffect(() => {
    document.title =
      pageTitles[location.pathname] ??
      "Παναγιώτα Μπακρατσά | Η σελίδα δεν βρέθηκε";
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
