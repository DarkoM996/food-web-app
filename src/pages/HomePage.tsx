import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folders, Newspaper, Users } from "lucide-react";
import Orders from "./Orders";
import PostTable from "@/components/posts/PostTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
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
      <AnalyticsChart />
      <PostTable title="Latest Posts" limit={5} />
    </>
  );
};

export default HomePage;
