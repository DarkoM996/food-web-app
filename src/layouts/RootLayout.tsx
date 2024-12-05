import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/SidebarMenu";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <main className="flex">
      <div className="hidden md:flex w-[14%]">
        <SidebarMenu />
      </div>
      <div className="flex flex-col w-full md:w-[86%] gap-6">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
