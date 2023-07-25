import React from "react";
import "../../styles/home.css";
import imgjumbo from "../../img/jumboimg.jpg";
import imgFamily from "../../img/family-landing.jpg";
import imgLanding2 from "../../img/imglanding2.jpg"
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
          Encuentre de manera fácil la gran variedad de alimentos que existen con nosotros!
        </p>
        <Link to='/register'>
        <button className="btn btn-primary btn-lg">Registro</button>
        </Link>
      </div>

      {/* Info Boxes */}
      <div className="info-box_main justify-content-center mt-4">
  {/* Info Box 1 */}
    <div className="col-md-10">
      <div className="info-box card p-3">
        <div className="info-box_content">
          <h3 className="card-title">Por qué NaturalChoice?</h3>
          <br />
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <img className="card-img" src={imgLanding2} alt="Familia feliz" />
        </div>
      </div>
    </div>
  </div>

    </div>
  );
};
