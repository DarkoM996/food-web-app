import { Route, Routes } from "react-router";
import Home from "./components/Home";
import RootLayout from "./layouts/RootLayout";
import MenuLayout from "./pages/MenuLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/menulayout" element={<MenuLayout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
