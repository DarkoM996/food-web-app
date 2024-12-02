import Home from "@/components/Home";
import { Outlet } from "react-router";
import Sidebar from "./../components/Sidebar";

const RootLayout = () => {
  return (
    <>
      <Home />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default RootLayout;
