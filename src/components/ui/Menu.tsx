import {
  MdDashboard,
  MdFavorite,
  MdMenu,
  MdPayment,
  MdPerson,
  MdRestaurantMenu,
  MdSettings,
} from "react-icons/md";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-start items-start gap-6 w-full h-fit px-3 py-8">
        <Link
          to="/"
          className="flex flex-row justify-start items-center gap-2 p-2 rounded-full bg-neutral-200 w-full"
        >
          <MdDashboard size={24} />
          <p className="text-base">Dashboard</p>
        </Link>
        <Link
          to="/menu"
          className="flex flex-row justify-start items-center gap-2"
        >
          <MdRestaurantMenu size={24} />
          <p className="text-base">Menu</p>
        </Link>
        <Link
          to="/menu"
          className="flex flex-row justify-start items-center gap-2"
        >
          <MdFavorite size={24} />
          <p className="text-base">Favorites</p>
        </Link>
        <Link
          to="/menu"
          className="flex flex-row justify-start items-center gap-2"
        >
          <MdMenu size={24} />
          <p className="text-base">Orders</p>
        </Link>
        <Link
          to="/menu"
          className="flex flex-row justify-start items-center gap-2"
        >
          <MdPayment size={24} />
          <p className="text-base">Booking</p>
        </Link>
        <Link
          to="/menu"
          className="flex flex-row justify-start items-center gap-2"
        >
          <MdSettings size={24} />
          <p className="text-base">Settings</p>
        </Link>
        <Link
          to="/menu"
          className="flex flex-row justify-start items-center gap-2"
        >
          <MdPerson size={24} />
          <p className="text-base">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
