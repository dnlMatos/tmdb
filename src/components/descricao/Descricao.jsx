import React, { useEffect, useState } from "react";
import "./style.css";
import { Button } from "./buttonStyled";
import axios from "axios";
import { BASE_GENRE } from "../../constants/base_url";
import { Context } from "../../context/context";
import { useContext } from "react";

export default function Descricao() {
  const [generos, setGeneros] = useState([]);
  const { filtros, setFiltros } = useContext(Context);

  const generosFiltro = [];
  useEffect(() => {
    chamaGeneros();  
  }, []);

  const chamaGeneros = async () => {
    const result = await axios.get(`${BASE_GENRE}`);
    setGeneros(result.data.genres);
  };

  const filtrosEscolhidos = (id) => {
    if (generosFiltro.includes(id)) {
      const indice = generosFiltro.indexOf(id)
      generosFiltro.splice(indice, 1)
    } else {
      generosFiltro.push(id)
    }
    // setFiltros(generosFiltro)
    console.log(`Chamada da var ${generosFiltro}`);
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
