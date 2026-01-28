import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <NavBar />
      <h1 data-theme="dark" className="text-white text-5xl">
        DevTinder Web
      </h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
