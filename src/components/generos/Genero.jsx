import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detalhaFilme } from "../../requests/request";

export default function Genero() {
  const params = useParams();
  const novoParams = Number(params.id.replace(":", ""));
  const [genero, setGenero] = useState([]);

  useEffect(() => {
    chamaGeneros(novoParams);
  }, []);

  const chamaGeneros = async (idFilme) => {
    const generos = await detalhaFilme(idFilme);
    setGenero(generos.genres);
  };
  return (
    <div className="container d-flex flex-row gap-2">
      {genero.map((gen, index) => {
        return <div key={index}>{gen.name}</div>;
      })}
    </div>
  );
}
