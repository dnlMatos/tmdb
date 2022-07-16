import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import PaginaPrincipal from "../../pages/paginaPrincipal";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <PaginaPrincipal />
        </Route>
       
      </Switch>
    </BrowserRouter>
  );
}
