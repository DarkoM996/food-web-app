import { MdDashboard } from "react-icons/md";
import { Link } from "react-router";

const Menu = () => {
  return (
    <div>
      <div>
        <Link to="/" className="flex flex-row justify-start items-center gap-2">
          <MdDashboard size={24} />
          <p className="text-base">Dashboard</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
