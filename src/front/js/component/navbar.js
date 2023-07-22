import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/navbar.css";
import { AiOutlineSearch } from "react-icons/ai"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="d-flex container-fluid justify-content-center">
        <a className="navbar-brand" href="#">
          NaturalChoice
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              
              <p className="nav-link active" aria-current="page">
                Conocenos
              </p>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Productos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ayuda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Registrate
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <div class="search-bar">
              <input placeholder="Search" type="search" class="input" />
            </div>
          </form>
          
        </div>
      </div>
    </nav>
  );
};
