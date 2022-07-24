import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pegaPersonagens } from "../../requests/request";

export default function Personagem() {
  const params = useParams();
  const novoParams = Number(params.id.replace(":", ""));
  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    chamaPersonagens(novoParams);
  });

  const chamaPersonagens = async (idFilme) => {
    const personagens = await pegaPersonagens(idFilme);
    personagens?.crew && setPersonagem(personagens.crew);
  };

  return (
    <div className="container d-flex flex-wrap gap-4 p-0">
      {personagem
        .filter((per) => {
          return per.job === "Producer" || per.job === "Director" || per.job === "Characters";
        })
        .map((res, index) => {
          return (
            <div key={index}>
              <h6>{res.name}</h6>
              <p>{res.job}</p>
            </div>
          );
        })}
    </div>
  );
}
