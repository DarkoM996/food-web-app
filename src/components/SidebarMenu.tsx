import { Link } from "react-router";
const SidebarMenu = () => {
  return (
    <aside className="w-full h-screen bg-neutral-100 ">
      <Link
        to="/"
        className="flex flex-col justify-center items-center p-4 bg-neutral-50"
      >
        <h3 className="font-bold text-2xl">The Tomato</h3>
      </Link>
    </aside>
  );
};

export default SidebarMenu;
