import React from "react";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../../utils/const";

function SearchedmoviesList() {
  const { MoviesSercheddata } = useSelector((state) => state.appstate);

  return (
    <section className="w-[80%] grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
      {MoviesSercheddata?.map((items) => (
        <>
          {items.backdrop_path !== null ? (
            <div className="card card-compact  bg-base-100 shadow-xl  rounded-md border border-accent">
              <figure>
                <img
                  src={`${POSTER_URL}/${items.backdrop_path}`}
                  alt="MOVIES POSTER"
                />
              </figure>
              <div className="card-body bg-black rounded-md">
                <h2 className="card-title">{items.title}</h2>
                <p className="text-lg">Realese Date : {items.release_date}</p>
                <p className="text-cyan">Rating : {items.popularity}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ))}
    </section>
  );
}

export default SearchedmoviesList;
