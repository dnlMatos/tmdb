import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { pegaVideos } from "../../requests/request";
import "./style.css";
import { BASE_YT } from "../../constants/base_url";

export default function Trailer() {
  const baseYt = BASE_YT;
  const params = useParams();
  const novoParams = Number(params.id.replace(":", ""));
  const [video, setVideo] = useState([]);

  useEffect(() => {
    chamaVideo(novoParams);
  }, [novoParams]);

  const chamaVideo = async (id) => {
    const resp = await pegaVideos(id);
    resp?.results && setVideo(resp.results);
  };

  const pegaTrailer = () => {
    const trailer = video
      .filter((resp) => {
        return resp.type === `Trailer`;
      })
      .map((resul) => {
        return resul.key;
      })
      .slice(0, 1);
    return trailer.toString();
  };

  return (
    <div className="container mt-5">
      <h3 className="fw-bold">Trailer</h3>
      <div class="ratio ratio-16x9">
        <iframe
          src={baseYt + pegaTrailer()}
          width="100%"
          height="400px"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
