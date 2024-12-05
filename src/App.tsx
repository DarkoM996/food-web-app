import { Route, Routes } from "react-router";
import Home from "./components/Home";
import RootLayout from "./layouts/RootLayout";
import MenuLayout from "./pages/MenuLayout";
import Favorite from "./pages/Favorite";
import Orders from "./pages/Orders";
import Booking from "./pages/Booking";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/menulayout" element={<MenuLayout />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
