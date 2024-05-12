import React from "react";
import Logoutbtn from "./Headers/Logoutbtn";
import { useNavigate } from "react-router-dom";
import NetflixLogo from "../../assets/NetflixLogo.png";
import { useMediaQuery } from "@uidotdev/usehooks";
import { IoMdHome } from "react-icons/io";

function Pageheader() {
  const Navigate = useNavigate();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <nav className="z-[200]  w-full h-[100px]">
      <div className="navbar  bg-black h-[100px]">
        <div className="flex-1 pl-5">
          <img
            className="cursor-pointer"
            onClick={() => Navigate("/movies")}
            src={NetflixLogo}
            alt=""
          />
        </div>
        <div className="flex-none space-x-5 ">
          <div className="Logoutbtn  pr-2">
            <Logoutbtn />
          </div>
          <div className="Homebtn  pr-2">
            <button
              onClick={() => Navigate("/movies")}
              className="btn btn-accent"
            >
              {isSmallDevice ? (
                <i className="text-3xl text-black">
                  <IoMdHome />
                </i>
              ) : (
                "HOME"
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Pageheader;
