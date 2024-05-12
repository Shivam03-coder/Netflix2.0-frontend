import React from "react";
import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

function Videotitle({ data }) {
  function Videoname() {
    if (data?.length > 0) {
      return data[0].name;
    } else {
      return "The Idea of You' with filmmakers | Academy Conversations";
    }
  }

  return (
    <section className="videotitle text-white absolute inset-0 flex flex-col justify-center bg-darken max-sm:space-y-4 ">
      <article className="videoinfo px-6 md:px-16 space-y-2">
        <h1 className="text-2xl md:text-5xl font-semibold font-Popins">
          {Videoname()}
        </h1>
      </article>
      <section className="btnGrp space-x-3 md:mt-8 px-6 md:px-16 max-md:flex hidden md:block ">
        <button className="btn btn-accent">
          <FaPlay /> PLAY
        </button>
        <button className="btn btn-accent">
          <FiInfo />
          WATCH MORE
        </button>
      </section>
    </section>
  );
}

export default Videotitle;
