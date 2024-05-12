import React from "react";
import { useGetpopularmoviesdataQuery } from "../../../app/redux_slices/Api/Moviesapi.slice";
import { POSTER_URL } from "../../../utils/const";

function Popularmovies() {
  const { isLoading, data } = useGetpopularmoviesdataQuery();

  return (
    <section className="Scrollbar-none flex gap-x-5">
      {isLoading ? (
        <div className="skeleton w-[500px] h-[281px] "></div>
      ) : (
        data?.map((items) => (
          <img
          key={items.id}
            className="rounded-2xl"
            src={`${POSTER_URL}/${items.backdrop_path}`}
            alt="MOVIES POSTER"
          />
        ))
      )}
    </section>
  );
}

export default Popularmovies;
