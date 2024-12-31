import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folders, Newspaper, Users } from "lucide-react";
import Orders from "./Orders";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 my-5">
      <DashboardCard
        title="Posts"
        count={100}
        icon={<Newspaper className="text-neutral-500" size={72} />}
      />
      <DashboardCard
        title="Category"
        count={12}
        icon={<Folders className="text-neutral-500" size={72} />}
      />
      <DashboardCard
        title="Users"
        count={2000}
        icon={<Users className="text-neutral-500" size={72} />}
      />
      <DashboardCard
        title="Orders"
        count={10000}
        icon={<Newspaper className="text-neutral-500" size={72} />}
      />
    </div>
  );
};

export default HomePage;
