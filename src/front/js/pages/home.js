import React, { useContext } from "react";
import "../../styles/home.css";

export const Home = () => {

  return (
    <div className="jumbotron">
      <h1 className="text-main">Bienvenidos!</h1>
      <p className="text-second">
        NaturalChoice es la mejor opcion para cuidar de su salud.
      </p>
      <br />
      <p>
        Encuentre de manera facil la gran variedad de alimentos que existen con
        nosotros!
      </p>
      <button>Registro</button>
    </div>
  );
};
