import { Suspense } from "react";
import Loading from "../components/app_components/Loading";
import { Navbar, Videocontent, MoviesList } from "./Lazyloading";

function Contentpage() {
  return (
    <section className="appcontent relative">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <section className="contentpageHeadervideo ">
          <Videocontent />
        </section>
        <section className="contentpageMovies bg-darken">
          <MoviesList />
        </section>
      </Suspense>
    </section>
  );
}

export default Contentpage;
