import axios from "axios";
import { api_key } from "../constants/api_key";
import { BASE_URL } from "../constants/base_url";

export const getFilms = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const detalhaFilme = async (id) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    );
    console.log(data)
    return data
  } catch (error) {
    throw new Error(error);
  }
};
