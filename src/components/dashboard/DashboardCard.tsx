import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

const DashboardCard = () => {
  return (
    <Card className="bg-neutral-100 dark:bg-neutral-800 p-4 pb-0">
      <CardContent className="">
        <h3 className="text-3xl text-center mb-4 font-bold text-neutral-800">
          Posts
        </h3>
        <div className="flex gap-5 justify-center items-center">
          <Newspaper />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
