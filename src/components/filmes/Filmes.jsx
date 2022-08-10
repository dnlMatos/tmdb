import React, { useState, useEffect, useContext } from "react";
import { AllCards, Card, Spinner } from "./styled";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Context } from "../../context/context";
import { BASE_IMG } from "../../constants/base_url";
import moment from "moment";
import { goToMovie } from "../../controller/coordinator";

export default function Filmes() {
  const Base_Img = BASE_IMG;
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { filmList, filmFilters, setFilters, localFilmList, setLocalFilmList } =
    useContext(Context);

  useEffect(() => {
    setLoading(false);
  }, [filmList, filmFilters]);

  return (
    <AllCards className="mt-3">
      {loading ? (
        <Spinner>
          <BeatLoader color="#2d0c5d" />
        </Spinner>
      ) : (
        <div className="container mt-3">
          <div className="row gap-4 justify-content-center">
            {filmFilters.length == 0 ? (
              <>
                {filmList?.map((filme) => {
                  return (
                    <Card
                      key={filme.id}
                      className="card p-0 mb-5 "
                      onClick={() => goToMovie(history, filme.id)}
                    >
                      <img
                        className="card-img-top"
                        src={`${Base_Img + filme.poster_path}`}
                        alt={filme.original_title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{filme.original_title}</h5>
                        <p className="card-text">
                          {moment(filme.release_date).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </>
            ) : (
              <>
                {localFilmList.map((filme) => {
                  return (
                    <Card
                      key={filme.id}
                      className="card p-0 mb-5 "
                      onClick={() => goToMovie(history, filme.id)}
                    >
                      <img
                        className="card-img-top"
                        src={`${Base_Img + filme.poster_path}`}
                        alt={filme.original_title}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{filme.original_title}</h5>
                        <p className="card-text">
                          {moment(filme.release_date).format("DD/MM/YYYY")}
                        </p>
                      </div>
                    </Card>
                  );
                })}
              </>
            )}
            {/* {localFilmList?.map((filme) => {
              return (
                <Card
                  key={filme.id}
                  className="card p-0 mb-5 "
                  onClick={() => goToMovie(history, filme.id)}
                >
                  <img
                    className="card-img-top"
                    src={`${Base_Img + filme.poster_path}`}
                    alt={filme.original_title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{filme.original_title}</h5>
                    <p className="card-text">
                      {moment(filme.release_date).format("DD/MM/YYYY")}
                    </p>
                  </div>
                </Card>
              );
            })} */}
          </div>
        </div>
      )}
    </AllCards>
  );
}
