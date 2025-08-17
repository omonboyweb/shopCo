import React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "../layout/footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
