import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Root from "./components/Root";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import Settings from "./components/Settings";
import RootLayout from "./layouts/RootLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
