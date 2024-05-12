import React from "react";
import { useGetupcomingmoviesdataQuery } from "../../../app/redux_slices/Api/Moviesapi.slice";
import { POSTER_URL } from "../../../utils/const";

function Upcomingmovies() {
  const { isLoading, data } = useGetupcomingmoviesdataQuery();

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

export default Upcomingmovies;
