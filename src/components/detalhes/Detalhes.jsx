import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG } from "../../constants/base_url";
import { detalhaFilme } from "../../requests/request";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import moment from "moment";
import "./style.css";
import Cores from "../../constants/Cores";
import Genero from "../generos/Genero";
import Personagem from "../personagens/Personagem";

export default function Detalhes() {
  const Base_Img = BASE_IMG;
  const params = useParams();
  const novoParams = Number(params.id.replace(":", ""));
  const [filme, setFilme] = useState([{}]);

  useEffect(() => {
    detalheFilme(novoParams);
  }, []);

  const converteTempo = (min) => {
    if (min != 0) {
      let h = Math.floor(min / 60);
      let m = min % 60;
      h = h < 10 ? "0" + h + "h" : h + "h";
      m = m < 10 ? "0" + m + "min" : m + "min";
      if (h == "00h") h = "";
      if (m == "00min") m = "";
      return `${h} ${m}`;
    }
  };

  const HexToRgbA = (hex, opacity) => {
    if (hex == undefined || hex == null) return "";
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${opacity})`;
  };

  const GetColorRating = (rating) => {
    if (rating == 0) {
      return "#000000";
    } else if (rating > 0 && rating <= 3) {
      return Cores.brand_red;
    } else if (rating > 3 && rating <= 6) {
      return Cores.brand_yellow;
    } else if (rating > 6 && rating <= 10) {
      return Cores.brand_green;
    }
  };

  //   const goBack = () => {
  //     history.goBack();
  //   };

  const detalheFilme = async (idFilme) => {
    const resp = await detalhaFilme(idFilme);
    setFilme(resp);
  };

  return (
    <div className="container-fluid descricao pt-5">
      <div className="container d-flex gap-5">
        <div className="container-img">
          <img
            className="card-img-top"
            src={`${Base_Img + filme.poster_path}`}
            alt={filme.original_title}
          />
        </div>
        <div className="container-desc">
          <div className="descLinha1 d-flex gap-2">
            <h3>{filme.original_title}</h3>
            <h3>({moment(filme.release_date).format("YYYY")})</h3>
          </div>
          <div className="descLinha2 d-flex gap-3 mb-4">
            <p>{moment(filme.release_date).format("DD/MM/YYYY")}</p>
            <p>
              <Genero />
            </p>
            <p>{converteTempo(filme.runtime)}</p>
          </div>
          <div className="descLinha3 d-flex align-items-lg-center gap-3 mb-4">
            <div className="grafico">
              <CircularProgressbar
                strokeWidth={7}
                styles={buildStyles({
                  textSize: "28px",
                  pathColor: GetColorRating(filme.vote_average),
                  textColor: Cores.brand_green,
                  trailColor: HexToRgbA(
                    GetColorRating(filme.vote_average),
                    0.3
                  ),
                  backgroundColor: Cores.brand_purple,
                })}
                background={true}
                backgroundPadding={true}
                value={filme.vote_average * 10}
                text={`${filme.vote_average * 10}%`}
              />
            </div>
            <p className="">
              Avaliação dos
              <br /> usuários
            </p>
          </div>
          <div className="descLinha4 mb-4">
            <h5>Sinopse</h5>
            <p>{filme.overview}</p>
          </div>
          <div className="descLinha5 mb-4">
            <Personagem />
          </div>
        </div>
      </div>
    </div>
  );
}
