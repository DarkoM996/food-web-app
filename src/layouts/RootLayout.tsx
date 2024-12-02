import Home from "@/components/Home";
import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default RootLayout;
