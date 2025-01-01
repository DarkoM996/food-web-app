import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/SidebarMenu";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="px-6 py-2">
        <Navbar />
      </div>
      <div className="flex flex-row justify-start gap-2">
        <div className="hidden md:block h-[100vh] w-[300px] px-6 py-4">
          <SidebarMenu />
        </div>
        <div className="p-5 w-full md:max-w-screen-2xl mx-auto lg:px-16">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
