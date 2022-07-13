import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../globalContext/context";
import { AllCards, Card, Spinner } from "./style";
import { BeatLoader } from "react-spinners";

export default function Filmes() {
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
        <>
          {localFilmList?.map((filme) => {
            return (
              <Card
                key={filme.id}
                className="card mb-5 align-self-center"
                array={localFilmList}
              >
                <div className="card-body">
                  <h5 className="card-title">{filme.title}</h5>
                  <p className="card-text">{filme.body}</p>
                  <button
                    type="button"
                    class="card-link btn btn-danger float-end"
                    onClick={() => {
                      removePost(filme.id);
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </Card>
            );
          })}
        </>
      )}
    </AllCards>
  );
}
