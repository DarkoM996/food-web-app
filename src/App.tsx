import { Route, Routes } from "react-router";
import Home from "./components/Home";
import RootLayout from "./layouts/RootLayout";
import MenuLayout from "./pages/MenuLayout";
import Favorite from "./pages/Favorite";
import Orders from "./pages/Orders";
import Booking from "./pages/Booking";
import AuthLayout from "./layouts/AuthLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/menulayout" element={<MenuLayout />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="booking" element={<Booking />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/authlayout" element={<AuthLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
