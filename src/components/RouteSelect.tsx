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
      <Route Icon={MdFavoriteBorder} selected={true} title="Favorites" />
      <Route Icon={MdOutlineRestaurantMenu} selected={true} title="Orders" />
      <Route Icon={MdOutlineList} selected={true} title="MenuLayout" />
      <Route Icon={MdPayment} selected={true} title="Booking" />
      <Route Icon={MdOutlinePerson} selected={true} title="Sign In" />
      <Route Icon={MdOutlinePersonAddAlt} selected={true} title="Sign Up" />
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
    <button>
      <Icon />
    </button>
  );
};
