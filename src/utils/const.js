const API_END_POINT = "https://netflix2-0-backend.onrender.com/api/v1/user";
const MOVIES_API_END_PONIT = import.meta.env.VITE_MOVIES_APP_API;
const MOVIES_AUTORIZATION_TOKEN = import.meta.env
  .VITE_MOVIES_AUTORIZATION_TOKEN;
const headers = {
  accept: "application/json",
  Authorization: `Bearer ${MOVIES_AUTORIZATION_TOKEN}`,
};

const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export {
  headers,
  API_END_POINT,
  MOVIES_API_END_PONIT,
  MOVIES_AUTORIZATION_TOKEN,
  POSTER_URL,
};
