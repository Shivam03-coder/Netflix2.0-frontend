import React from "react";
import NetflixLogo from "../../../assets/NetflixLogo.png";
import Logoutbtn from "./Logoutbtn";
import Searchbarbtn from "./Searchbarbtn";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();

  return (
    <nav className="z-[200] lg:absolute lg:inset-0 w-full h-[100px]">
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
          <div
            onClick={() => Navigate("/movies/search")}
            className="Searchbtn mx-auto rounded-full p-2 centerContent border border-accent cursor-pointer"
          >
            <Searchbarbtn />
          </div>
          <div className="Logoutbtn  pr-2">
            <Logoutbtn />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
