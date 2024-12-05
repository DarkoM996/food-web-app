import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/SidebarMenu";
import { Outlet } from "react-router";
import AuthLayout from "./AuthLayout";

const RootLayout = () => {
  return (
    <main className="flex">
      <div className="hidden md:flex">
        <SidebarMenu />
      </div>
      <div className="flex flex-col w-full">
        <Navbar />
        <Outlet />
      </div>
      <AuthLayout />
    </main>
  );
};

export default RootLayout;
