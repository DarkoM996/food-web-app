const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex items-center w-full relative gap-2 p-1 hover:bg-stone-300 rounded transition-colors">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Aneka"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-primary_backgroundLighterColor-500 shadow"
        />
        <div className="text-start">
          <span className="text-sm font-bold block">
            <p>Andrew Young</p>
          </span>
          <span className="text-xs font-light block">
            <p>andrew@gmail.com</p>
          </span>
        </div>
      </button>
    </div>
  );
};

export default AccountToggle;
