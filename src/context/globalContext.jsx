import React, { useState, useEffect } from "react";
import { getFilms } from "../requests/request";
import { Context } from "./context";

export default function GlobalContext(props) {
  const [filmList, setFilmList] = useState([]);
  const [filmFilters, setfilmFilters] = useState([]);
  const [localFilmList, setLocalFilmList] = useState([]);

  useEffect(() => {
    getAllFilm();
  }, []);

  const getAllFilm = async () => {
    const response = await getFilms();
    setFilmList(response.results);
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
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
