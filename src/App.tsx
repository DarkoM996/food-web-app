import React from "react";
import { Button } from "@/components/ui/button";
import { createBrowserRouter, Route, RouterProvider } from "react-router";
import { createRoutesFromElements } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
