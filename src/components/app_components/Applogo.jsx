import React from "react";
import NetflixLogo from "../../assets/NetflixLogo.png";

function Applogo() {
  return (
    <section className="flex justify-between bg-transparent items-center md:px-36 py-10">
      <img className="max-sm:mx-auto" src={NetflixLogo} alt="" />
    </section>
  );
}

export default Applogo;
