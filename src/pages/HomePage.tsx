import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 my-5">
      <DashboardCard
        title="Posts"
        count={100}
        icon={<Newspaper className="text-neutral-500" size={72} />}
      />
    </div>
  );
};

export default HomePage;
