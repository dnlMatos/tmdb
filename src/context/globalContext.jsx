import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/base_url";
import { getFilms } from "../requests/request";
import { Context } from "./context";

export default function GlobalContext(props) {
  const [filmList, setFilmList] = useState([]);
  const [filmFilters, setfilmFilters] = useState([]);
  const [localFilmList, setLocalFilmList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllFilm();
  }, [page]);

  const getAllFilm = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}&page=${page}`);
      return setFilmList(data.results);
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <Context.Provider
      value={{
        filmList,
        setFilmList,
        filmFilters,
        setfilmFilters,
        localFilmList,
        setLocalFilmList,
        page,
        setPage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
