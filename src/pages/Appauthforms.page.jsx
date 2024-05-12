import React from "react";
import Applogo from "../components/app_components/Applogo";
import Footer from "../components/app_components/Footer";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

function Appauthformspage() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  return (
    <section className="LoginPage">
      <div className={`Applogo ${isSmallDevice && "pl-5"}`}>
        <Applogo />
      </div>
      <div className="Authforms max-w-lg mx-auto">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}

export default Appauthformspage;
