import { Suspense } from "react";
import Loading from "../app_components/Loading";
import {
  NowplayingMovies,
  Popularmovies,
  Topratedmovies,
  Upcomingmovies,
} from "./Movieslazyloading";

function MoviesList() {
  return (
    <section className="MoviesList bg-darken px-2 space-y-4 text-white pb-5">
      <Suspense fallback={<Loading />}>
        <section className="bg-transparent">
          <h1 className="Moviesheadertext p-2">NOW PLAYING MOVIES</h1>
          <NowplayingMovies />
        </section>
        <section>
          <h1 className="Moviesheadertext p-2 ">POPULAR MOVIES</h1>
          <Popularmovies />
        </section>
        <section>
          <h1 className="Moviesheadertext p-2 ">TOP RATED MOVIES</h1>
          <Topratedmovies />
        </section>
        <section>
          <h1 className="Moviesheadertext p-2 ">UPCOMING MOVIES</h1>
          <Upcomingmovies />
        </section>
      </Suspense>
    </section>
  );
}

export default MoviesList;
