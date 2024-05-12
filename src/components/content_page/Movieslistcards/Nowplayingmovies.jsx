import React, { useEffect, useState } from "react";
import {
  useGetmoviesvideobyidQuery,
  useGetnowplayingmoviesdataQuery,
} from "../../../app/redux_slices/Api/Moviesapi.slice";
import { POSTER_URL } from "../../../utils/const";
import { useDispatch } from "react-redux";
import { Moviesvideebyid } from "../../../app/redux_slices/Appstate.slice";

function NowplayingMovies() {
  const [moviesid, setmoviesid] = useState("1111873");

  const { isLoading, data } = useGetnowplayingmoviesdataQuery();

  const response = useGetmoviesvideobyidQuery(moviesid);
  
  const dipstach = useDispatch();

  const handleonclick = (id) => {
    setmoviesid(id);
  };

  useEffect(() => {
    dipstach(Moviesvideebyid(response?.data));
  }, [response]);

  return (
    <section className="Scrollbar-none flex gap-x-5">
      {isLoading ? (
        <div className="skeleton w-[500px] h-[281px] "></div>
      ) : (
        data?.map((items) => (
          <img
            key={items.id}
            onClick={() => {
              handleonclick(items?.id);
            }}
            className="rounded-2xl"
            src={`${POSTER_URL}/${items.backdrop_path}`}
            alt="MOVIES POSTER"
          />
        ))
      )}
    </section>
  );
}

export default NowplayingMovies;
