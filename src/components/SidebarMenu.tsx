import { Link } from "react-router";
import Menu from "./ui/Menu";
const SidebarMenu = () => {
  return (
    <aside className="w-full h-screen bg-white ">
      <Link
        to="/"
        className="flex flex-col justify-center items-center p-4 border-b border-neutral-100"
      >
        <h3 className="font-bold text-2xl">The Tomato</h3>
      </Link>
      <Menu />
    </aside>
  );
};

export default SidebarMenu;
