const AccountToggle = () => {
  return (
    <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex items-center w-full relative gap-2 p-1 hover:bg-stone-300 rounded transition-colors">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Aneka"
          alt="avatar"
          className="size-8 rounded shrink-0 bg-violet-500 shadow"
        />
      </button>
    </div>
  );
};

export default AccountToggle;
