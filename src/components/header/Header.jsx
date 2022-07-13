import React from "react";
import "./style.css";

export default function Header() {
  return (
   <div className="container-fluid header">
    <div className="container d-flex justify-content-center justify-content-md-start align-items-center">
      <h2 className="mb-0"> TMDB</h2>
      <div className="fig"></div>
    </div>
   </div>
  );
}
