import {
  MdDashboard,
  MdFavorite,
  MdMenu,
  MdPayment,
  MdRestaurantMenu,
} from "react-icons/md";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div>
      <div>
        <Link to="/" className="flex flex-row justify-start items-center gap-2">
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
          <MdMenu size={24} />
          <p className="text-base">Menu</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
