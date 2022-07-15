import React, { useState, useEffect } from "react";
import { getFilms } from "../requests/request";
import { Context } from "./context";

export default function globalContext(props) {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    getAllFilm();
  }, []);

  const getAllFilm = async () => {
    const response = await getFilms();
    setFilmList(response);
  };
  return (
    <Context.Provider value={{ filmList, setFilmList }}>
      {props.children}
    </Context.Provider>
  );
}
