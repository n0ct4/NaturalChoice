import React, { useContext } from "react";
import "../../styles/home.css";

export const Home = () => {

  return (
    <div class="container">
  <div class="jumbotron">
    <h1 class="text-main">Bienvenidos!</h1>
    <p class="text-second">
      NaturalChoice es la mejor opción para cuidar de su salud.
    </p>
    <br />
    <p>
      Encuentre de manera fácil la gran variedad de alimentos que existen con nosotros!
    </p>
    <button>Registro</button>
  </div>

  <div class="info-boxes">
    <div class="info-box_1">
      <div class="info-box_text">
        <div class="info-box_text1">
          <span>Texto 1</span>
        </div>
        <div class="info-box_text1">
          <span>Texto 2</span>
        </div>
      </div>
    </div>

    <div class="info-box_2">
      <div class="info-box_text">
        <div class="info-box_text3">
          <span>Texto 3</span>
        </div>
        <div class="info-box_text4">
          <span>Texto 4</span>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
