import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Root from "./components/Root";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import Settings from "./components/Settings";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
