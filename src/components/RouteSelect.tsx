import { FiHome } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import {
  MdFavoriteBorder,
  MdOutlineList,
  MdOutlinePerson,
  MdOutlinePersonAddAlt,
  MdOutlineRestaurantMenu,
  MdPayment,
} from "react-icons/md";

const RouteSelect = () => {
  return (
    <div className="space-y-2">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={MdFavoriteBorder} selected={false} title="Favorites" />
      <Route Icon={MdOutlineRestaurantMenu} selected={false} title="Orders" />
      <Route Icon={MdOutlineList} selected={false} title="MenuLayout" />
      <Route Icon={MdPayment} selected={false} title="Booking" />
      <Route Icon={MdOutlinePerson} selected={false} title="Sign In" />
      <Route Icon={MdOutlinePersonAddAlt} selected={false} title="Sign Up" />
    </div>
  );
};

export default RouteSelect;

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`flex justify-start items-center gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-primary_black-950 shadow"
          : "hover:bg-neutral-400 text-primary_grays-500 bg-transparent shadow-none"
      }`}
    >
      <Icon />
      <span>{title}</span>
    </button>
  );
};
