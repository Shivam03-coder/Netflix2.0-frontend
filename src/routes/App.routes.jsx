import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MoviesSearchPage,
  Appauthformspage,
  Contentpage,
  Errorpage,
  Loginform,
  Signupform,
} from "../pages/Lazyloading";
import Loading from "../components/app_components/Loading";

function Approutes() {
  const { isSignupForm } = useSelector((state) => state.appstate);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Appauthformspage />}>
          <Route
            index
            element={isSignupForm ? <Signupform /> : <Loginform />}
          />
        </Route>
        <Route path="/movies" element={<Contentpage />} />
        <Route path="/movies/search" element={<MoviesSearchPage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Suspense>
  );
}

export default Approutes;
