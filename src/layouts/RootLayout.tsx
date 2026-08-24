import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />

      <main id="main-content">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
