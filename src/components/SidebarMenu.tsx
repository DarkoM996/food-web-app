import Plan from "./Plan";
import RouteSelect from "./RouteSelect";
import Search from "./Search";

const SidebarMenu = () => {
  return (
    <aside className="w-full h-screen bg-primary_white-200 ">
      <div className="sticky top-4 px-2 h-[calc(100vh-32px-48px)]">
        <Search />
      </div>
      <Plan />
    </aside>
  );
};

export default SidebarMenu;
