import { Outlet } from "react-router";
import Navbar from "@/components/Navbar";
import SidebarMenu from "./../components/SidebarMenu";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <SidebarMenu />
      <div>{<Outlet />}</div>
    </>
  );
};

export default RootLayout;
