import React from "react";

const NowplayingMovies = React.lazy(() =>
  import("./Movieslistcards/Nowplayingmovies")
);
const Popularmovies = React.lazy(() =>
  import("./Movieslistcards/Popularmovies")
);
const Topratedmovies = React.lazy(() =>
  import("./Movieslistcards/Topratedmovies")
);
const Upcomingmovies = React.lazy(() =>
  import("./Movieslistcards/Upcomingmovies")
);

export { NowplayingMovies, Popularmovies, Topratedmovies, Upcomingmovies };
