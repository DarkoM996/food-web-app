import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import CommandMenu from "./CommandMenu";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-300 mb-4 relative rounded-full flex justify-start items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-primary_grays-500 focus:outline-none"
        />
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Search;
