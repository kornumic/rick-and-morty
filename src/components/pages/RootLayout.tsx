import MainNavigation from "../layout/MainNavigation";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
