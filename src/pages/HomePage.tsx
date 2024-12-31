import DashboardCard from "@/components/dashboard/DashboardCard";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 my-5">
      <DashboardCard />
    </div>
  );
};

export default HomePage;
