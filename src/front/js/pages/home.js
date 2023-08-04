import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container-landing">
      {/* Jumbotron */}
      <div className="jumbotron">
        <h1 className="display-4">Bienvenidos!</h1>
        <p className="lead">
          NaturalChoice es la mejor opción para cuidar de su salud.
        </p>
        <p>
          Encuentre de manera fácil la gran variedad de alimentos que existen
          con nosotros!
        </p>
        <Link to="/register">
          <button className="btn btn-primary btn-lg">Registro</button>
        </Link>
      </div>

      <div className="container overflow-hidden text-center">
        <div className="row gy-5">
          <div className="col-6">
            <div className="p-3">Te sorprenderas de lo que NaturalChoice ofrece!</div>
          </div>
          <div className="col-6">
            <div className="p-3">IMAGEN</div>
          </div>
          <div className="col-6">
            <div className="p-3">IMAGEN</div>
          </div>
          <div className="col-6">
            <div className="p-3">TEXT 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};
