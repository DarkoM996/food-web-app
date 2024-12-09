import AccountToggle from "./AccountToggle";

const SidebarMenu = () => {
  return (
    <aside className="w-full h-screen bg-neutral-200">
      <div className="sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
      </div>

      {/* TODO: Plan toggle */}
    </aside>
  );
};

export default SidebarMenu;
