import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <main id="main-content">
      <Outlet />
    </main>
  );
};

export default RootLayout;
