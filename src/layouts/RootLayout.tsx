import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/SidebarMenu";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-start gap-2">
        <div className="hidden md:block h-[100vh]">
          <SidebarMenu />
        </div>
        <div className="p-5 w-full md:max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
