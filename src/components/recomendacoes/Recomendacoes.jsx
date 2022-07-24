import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG } from "../../constants/base_url";
import { pegaRecomendacoes } from "../../requests/request";
import moment from "moment";
import "./style.css";

export default function Recomendacoes() {
  const Base_Img = BASE_IMG;
  const params = useParams();
  const novoParams = Number(params.id.replace(":", ""));
  const [recomendacoes, setRecomendacoes] = useState([]);

  useEffect(() => {
    chamaRecomendacoes(novoParams);
  }, [novoParams]);

  const chamaRecomendacoes = async (id) => {
    const resp = await pegaRecomendacoes(id);
    setRecomendacoes(resp.results);
  };

  return (
    <div className="container mt-5">
      <h3 className="fw-bold">Recomendações</h3>
      <div className="recomendationsContainer">
        {recomendacoes.map((filme, index) => {
          return (
            <div key={index} className=" filme mb-4">
              <div className="contImg">
                <img
                  className="rounded"
                  src={Base_Img + filme.poster_path}
                  alt={filme.name}
                />
              </div>
              <h5 className="card-title mt-2 mb-2">{filme.original_title}</h5>
              <p className="card-text ">{moment(filme.release_date).format("DD/MM/YYYY")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
