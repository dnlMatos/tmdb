import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AllCards, Card, Spinner } from "./styled";
import { BeatLoader } from "react-spinners";
import { Context } from "../../context/context";
import { BASE_IMG } from "../../constants/base_url";
import { goToMovie } from "../../controller/coordinator";

export default function Filmes() {
  const Base_Img = BASE_IMG;
  const [loading, setLoading] = useState(true);
  const { filmList, setFilmList } = useContext(Context);
  const [localFilmList, setLocalFilmList] = useState([]);

  useEffect(() => {
    updateFilmList();
    setLoading(false);
  }, [filmList]);

  const updateFilmList = async () => {
    await setLocalFilmList(filmList);
  };

  return (
    <AllCards className="mt-3">
      {loading ? (
        <Spinner>
          <BeatLoader color="#2d0c5d" />
        </Spinner>
      ) : (
        <div className="container mt-3">
          <div className="row gap-4 justify-content-center">
            {localFilmList?.map((filme) => {
              return (
                <Card
                  key={filme.id}
                  className="card p-0 mb-5 "
                  onClick={() => goToMovie(filme.id)}
                >
                  <img
                    className="card-img-top"
                    src={`${Base_Img + filme.poster_path}`}
                    alt={filme.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{filme.original_title}</h5>
                    <p className="card-text">{filme.release_date}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </AllCards>
  );
}
