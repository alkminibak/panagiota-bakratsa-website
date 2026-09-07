import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const RootLayout = () => {
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
