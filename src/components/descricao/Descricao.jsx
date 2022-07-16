import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "./buttonStyled";
import axios from "axios";
import { BASE_GENRE } from "../../constants/base_url";

export default function Descricao() {
  const [generos, setGeneros] = useState([]);
  const filtros = [];

  useEffect(() => {
    chamaGeneros();
  }, []);

  const chamaGeneros = async () => {
    const result = await axios.get(`${BASE_GENRE}`);
    setGeneros(result.data.genres);
  };

  const filtrosEscolhidos = (id) => {
    if (filtros.includes(id)) {
      const indice = filtros.indexOf(id)
      filtros.splice(indice, 1)
    } else {
      filtros.push(id)
    }
    console.log(filtros);
  };


  return (
    <div className="container-fluid descricao">
      <div className="container pt-5 pb-5">
        <h2 className="m-0 p-0 text-center">
          Milhões de filmes, séries e pessoas <br /> para descobrir. Explore já.
        </h2>
        <p className="mt-4 mb-2 text-center">Filtre por:</p>
        <div className="container ">
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {generos.map((genero) => {
              return (
                <Button
                  key={genero.id}
                  className="btn gap-3"
                  onClick={() => filtrosEscolhidos(genero.id)}
                >
                  {genero.name}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
