import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
console.log("API KEY:", API_KEY);
export const tmdb = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY, language: "en-US" },
});

export const imgBase = (size = "w500") =>
  `${process.env.REACT_APP_TMDB_IMAGE_BASE || "https://image.tmdb.org/t/p"}/${size}`;

export const endpoints = {
  trending: "/trending/movie/week",
  topRated: "/movie/top_rated",
  action: "/discover/movie?with_genres=28",
  comedy: "/discover/movie?with_genres=35",
  horror: "/discover/movie?with_genres=27",
  romance: "/discover/movie?with_genres=10749",
  documentaries: "/discover/movie?with_genres=99",
  search: "/search/movie",
  details: (id) => `/movie/${id}`,
  videos: (id) => `/movie/${id}/videos`,
  similar: (id) => `/movie/${id}/similar`,
};
