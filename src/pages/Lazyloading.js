import React from "react";

// APP routes LAZY LOADING

const MoviesSearchPage = React.lazy(() => import("./Moviessearch.page"));
const Appauthformspage = React.lazy(() => import("./Appauthforms.page"));
const Contentpage = React.lazy(() => import("./Content.page"));
const Loginform = React.lazy(() =>
  import("../components/User-auth-forms/Loginform")
);
const Signupform = React.lazy(() =>
  import("../components/User-auth-forms/Signupform")
);
const Errorpage = React.lazy(() => import("./Error.page"));

// Content.page LAZY LOADING

const Videocontent = React.lazy(() =>
  import("../components/content_page/Videocontent")
);
const MoviesList = React.lazy(() =>
  import("../components/content_page/MoviesList")
);
const Navbar = React.lazy(() =>
  import("../components/app_components/Headers/Navbar")
);

// Moviessearch.page  LAZY LOADING

const Pageheader = React.lazy(() =>
  import("../components/app_components/Pageheader")
);
const Searchedmovies = React.lazy(() =>
  import("../components/Moviessearch_page/Searchedmovies")
);

export {
  MoviesSearchPage,
  Appauthformspage,
  Contentpage,
  Loginform,
  Signupform,
  Errorpage,
  Videocontent,
  MoviesList,
  Navbar,
  Pageheader,
  Searchedmovies,
};
