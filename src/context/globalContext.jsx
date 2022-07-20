import React, { useState, useEffect } from "react";
import { getFilms } from "../requests/request";
import { Context } from "./context";

export default function GlobalContext(props) {
  const [filmList, setFilmList] = useState([]);
  const [filtros, setFiltros] = useState([])

  useEffect(() => {
    getAllFilm();
  }, []);

  const getAllFilm = async () => {
    const response = await getFilms();
    console.log(response.results);
    setFilmList(response.results);
  };
  
  return (
    <Context.Provider value={{ filmList, setFilmList, filtros, setFiltros }}>
      {props.children}
    </Context.Provider>
  );
}
