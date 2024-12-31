import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/SidebarMenu";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-[250px,_1fr] gap-6">
        <div className="hidden md:flex h-screen">
          <SidebarMenu />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
