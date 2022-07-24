import React from "react";
import Detalhes from "../components/detalhes/Detalhes";
import Elenco from "../components/elenco/Elenco";
import Header from "../components/header/Header";
import Trailer from "../components/trailer/Trailer";

export default function DetalhaFilme() {


  return (
    <>
      <Header />
      <Detalhes/>
      <Elenco/>
      <Trailer/>
    </>
  );
}
