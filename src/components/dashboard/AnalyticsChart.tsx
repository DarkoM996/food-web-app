import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import data from "@/data/analytics";

const AnalyticsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For This Year</CardTitle>
        <CardDescription>Orders Per Month</CardDescription>
        <CardContent>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart width={1200} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#000" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default AnalyticsChart;
