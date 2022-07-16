import React from "react";
import Descricao from "../components/descricao/Descricao";
import Filmes from "../components/filmes/Filmes";
import Header from "../components/header/Header";

export default function PaginaPrincipal() {
  return (
    <>
      <Header />
      <Descricao />
      <Filmes/>
    </>
  );
}
