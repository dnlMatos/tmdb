import React from "react";
import { useHistory } from "react-router-dom";
import { goToHome } from "../../controller/coordinator";
import "./style.css";

export default function Header() {
  const history = useHistory();

  return (
   <div className="container-fluid header">
    <div className="container d-flex justify-content-center justify-content-md-start align-items-center">
      <h2 className="mb-0" onClick={()=>goToHome(history)}> TMDB</h2>
      <div className="fig"></div>
    </div>
   </div>
  );
}
