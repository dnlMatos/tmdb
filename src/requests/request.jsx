import axios from "axios";
import { BASE_URL } from "../constants/base_url";

export const getFilms = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};