import React, { Suspense } from "react";
import backgroundimage from "../../assets/Netflix-Background.jpg";
import Loading from "../app_components/Loading";
const Searchbar = React.lazy(() => import("./Searchbar"));
const SearchedmoviesList = React.lazy(() => import("./SearchedmoviesList"));

function Searchedmovies() {
  return (
    <Suspense fallback={<Loading />}>
      <section
        className="hero min-h-screen"
        style={{
          background: ` url(${backgroundimage})`,
        }}
      >
        <section className="hero-overlay bg-opacity-50 bg-darken">
          <section className="Searchbarsection p-5 centerContent">
            <Searchbar />
          </section>
          <section className="SearchedmoviesList p-5 centerContent">
            <SearchedmoviesList />
          </section>
        </section>
      </section>
    </Suspense>
  );
}

export default Searchedmovies;
