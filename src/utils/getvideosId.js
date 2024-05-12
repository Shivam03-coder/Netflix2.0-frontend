import React from "react";
import { useGetmoviesvideobyidQuery } from "../app/redux_slices/Api/Moviesapi.slice";
import { Moviesvideebyid } from "../app/redux_slices/Appstate.slice";
import { useDispatch } from "react-redux";

function getmoviesvideo(movie_id) {
  const dispatch = useDispatch();
  const response = useGetmoviesvideobyidQuery(movie_id);
}

export default getmoviesvideo;
