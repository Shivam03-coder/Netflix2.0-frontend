import React from "react";
import Videotitle from "./Videotitle";
import { useSelector } from "react-redux";
function Videocontent() {
  const { Moviesvideo } = useSelector((state) => state.appstate);

  function VideoKey() {
    if (Moviesvideo?.length > 0) {
      return Moviesvideo[0].key;
    } else {
      return "9CpxLW33RL8";
    }
  }

  return (
    <section className="w-full relative">
      <iframe
        className="w-full h-full aspect-video object-cover"
        src={`https://www.youtube.com/embed/${VideoKey()}?si=pRcKP8WtwKe7aJeW&amp;controls=0&mute=1&autoplay=1 `}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <Videotitle data={Moviesvideo} />
    </section>
  );
}

export default Videocontent;
