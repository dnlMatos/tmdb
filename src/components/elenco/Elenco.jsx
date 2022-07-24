import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG } from "../../constants/base_url";
import { pegaPersonagens } from "../../requests/request";
import imgNotFound from "../../img/imgNotFound.png";
import "./style.css";

export default function Elenco() {
  const params = useParams();
  const Base_Img = BASE_IMG;
  const novoParams = Number(params.id.replace(":", ""));
  const [elenco, setElenco] = useState([]);

  useEffect(() => {
    chamaElenco(novoParams);
  });

  const chamaElenco = async (idFilme) => {
    const cast = await pegaPersonagens(idFilme);
    cast?.cast && setElenco(cast.cast);
  };

  return (
    <div className="container mt-3">
      <h3 className="fw-bold">Elenco principal</h3>
      <div className="castContainer">
        {elenco.map((per, index) => {
          return (
            <div key={index} className="castCard card mb-4">
              <img
              className="rounded"
                src={
                  Base_Img + per.profile_path == null
                    ? imgNotFound
                    : Base_Img + per.profile_path
                }
                alt={per.name}
              />
              <h5 className="card-title mt-2">{per.name}</h5>
              <p className="card-text">{per.character}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
