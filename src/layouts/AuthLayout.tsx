import SignIn from "@/pages/SignIn";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <>
      <SignIn />
      <Outlet />
    </>
  );
};

export default AuthLayout;
