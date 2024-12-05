import SidebarMenu from "@/components/SidebarMenu";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <main className="flex">
      <SidebarMenu />
      <div className="flex">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
