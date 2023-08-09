import React, { useState, useEffect, useContext } from "react";

export const UserView = () => {
  const [userName, setUserName] = useState(""); // Estado para almacenar el nombre de usuario
  const email = localStorage.getItem("email"); // Obtener el correo electrónico del almacenamiento local

  return (
    <div className="jumbotron">
      <h1>Hola, {email}!</h1> {/* Mostrar el mensaje de bienvenida */}
      <br />
      <h4>¿Qué se te antoja hoy? Pide por NaturalChoice</h4>
    </div>
  );
};
