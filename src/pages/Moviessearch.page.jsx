import React, { Suspense } from "react";
import Loading from "../components/app_components/Loading";
import { Pageheader, Searchedmovies } from "./Lazyloading";

function MoviesSearchPage() {
  return (
    <section className="bg-black">
      <Suspense fallback={<Loading />}>
        <Pageheader />
        <Searchedmovies />
      </Suspense>
    </section>
  );
}

export default MoviesSearchPage;
