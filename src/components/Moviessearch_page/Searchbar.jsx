import React, { useRef, useEffect, useState } from "react";
import { useGetmoviesbysearchQuery } from "../../app/redux_slices/Api/Moviesapi.slice";
import { useDispatch } from "react-redux";
import { Moviesbyserach } from "../../app/redux_slices/Appstate.slice";

function Searchbar() {
  const input = useRef();

  const [Moviesname, setMoviesname] = useState("funny movies");

  const response = useGetmoviesbysearchQuery(Moviesname);

  const dispatch = useDispatch();

  const Handlesearchbar = (e) => {
    e.preventDefault();

    const moviesname = input.current.value;

    setMoviesname(moviesname);

    input.current.value = "";
  };

  useEffect(() => {
    dispatch(dispatch(Moviesbyserach(response?.data)));
  }, [Moviesname, response]);

  return (
    <form
      onSubmit={Handlesearchbar}
      className="form-control flex flex-row space-x-2 w-[95%] md:w-[70%] "
    >
      <input
        type="text"
        ref={input}
        placeholder="Search movies"
        className="w-full bg-black border  p-3 font-Popins  border-accent border-1  placeholder:text-accent focus:border-accent"
      />
      <button className="btn btn-accent rounded-none">SEARCH</button>
    </form>
  );
}

export default Searchbar;
