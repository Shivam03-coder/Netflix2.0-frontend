import { apiSlice } from "../../redux_middleware/Api_middleware";
import { headers } from "../../../utils/const";

const MoviesapiquerySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getnowplayingmoviesdata: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        method: "GET",
        headers,
      }),
      transformResponse: (resp) => resp?.results,
      providesTags: ["Movies"],
    }),
    getpopularmoviesdata: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        method: "GET",
        headers,
      }),
      providesTags: ["Movies"],
      transformResponse: (resp) => resp?.results,
    }),
    gettopratedmoviesdata: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        method: "GET",
        headers,
      }),
      providesTags: ["Movies"],
      transformResponse: (resp) => resp?.results,
    }),
    getupcomingmoviesdata: builder.query({
      query: () => ({
        url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        method: "GET",
        headers,
      }),
      providesTags: ["Movies"],
      transformResponse: (resp) => resp?.results,
    }),
    getmoviesvideobyid: builder.query({
      query: (movie_id) => ({
        url: `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
        method: "GET",
        headers,
      }),
      providesTags: ["Movies"],
      transformResponse: (resp) => resp?.results,
    }),
    getmoviesbysearch: builder.query({
      query: (name) => ({
        url: `https://api.themoviedb.org/3/search/movie?query=${name}`,
        method: "GET",
        headers,
      }),
      providesTags: ["Movies"],
      transformResponse: (resp) => resp?.results,
    }),
  }),
});

export const {
  useGetnowplayingmoviesdataQuery,
  useGetpopularmoviesdataQuery,
  useGettopratedmoviesdataQuery,
  useGetupcomingmoviesdataQuery,
  useGetmoviesvideobyidQuery,
  useGetmoviesbysearchQuery,
} = MoviesapiquerySlice;
