import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import PaginaPrincipal from "../pages/paginaPrincipal";
import DetalhaFilme from "../pages/detalhaFilme"

export default function Router() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route exact path={"/"}>
          <PaginaPrincipal />
        </Route>
        <Route exact path={"/movie/:id"}>
          <DetalhaFilme />
        </Route>       
      </Switch>
    </BrowserRouter>
  );
}