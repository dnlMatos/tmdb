import React from "react";
import { Button } from "./buttonStyled";
import "./style.css";

export default function Descricao() {
  return (
    <div className="container-fluid descricao">
      <div className="container pt-5 pb-5">
        <h2 className="m-0 p-0">
          Milhões de filmes, séries e pessoas <br /> para descobrir. Explore já.
        </h2>
        <p className="mt-4 mb-2">Filtre por:</p>
        <div className="container d-flex">
          <Button className="btn mx-auto">Ação</Button>
          <Button className="btn mx-auto">Crime</Button>
          <Button className="btn mx-auto">Documentário</Button>
          <Button className="btn mx-auto">Comédia</Button>
          <Button className="btn mx-auto">Aventura</Button>
          <Button className="btn mx-auto">Terror</Button>
          <Button className="btn mx-auto">Suspense</Button>
          <Button className="btn mx-auto">Infantil</Button>
        </div>
      </div>
    </div>
  );
}
