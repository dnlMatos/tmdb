import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import DetalhaFilme from "../../pages/detalhaFilme";
import PaginaPrincipal from "../../pages/paginaPrincipal";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <PaginaPrincipal />
        </Route>
        <Route exact path={"/details/movie/:id"}>
          <DetalhaFilme />
        </Route>       
      </Switch>
    </BrowserRouter>
  );
}
