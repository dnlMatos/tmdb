import { api_key } from "./api_key";

export const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
export const BASE_IMG = `https://image.tmdb.org/t/p/w500/`;
export const BASE_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;
export const BASE_GENRE = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
export const DETAILS_MOVIE = `https://api.themoviedb.org/3/movie/:id?api_key=${api_key}`;
export const BASE_YT = `https://www.youtube.com/embed/`;

