import React, { Component } from "react";
import styles from "../../styles/footer.css";

export const Footer = () => (
	<>
  <footer className="w-100 py-4 flex-shrink-0">
    <div className="container py-4">
      <div className="row gy-4 gx-5">
        <div className="col-lg-4 col-md-6">
          <h5 className="h1 text-dark">NaturalChoice</h5>
          <p className="small text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <p className="small text-muted mb-0">
            © Copyrights. All rights reserved.{" "}
          </p>
        </div>

        <div className="col-lg-2 col-md-6">
          <h5 className="text-dark mb-3">Quick links</h5>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Get started</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        
        <div className="col-lg-4 col-md-6">
          <h5 className="text-dark mb-3">Newsletter</h5>
          <p className="small text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <form action="#">
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary"
                id="button-addon2"
                type="button"
              >
                <i className="fas fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>

		<div className="col-lg-2 col-md-6">
          <h5 className="text-dark mb-3">Redes Sociales</h5>
          <ul className="list-unstyled text-muted">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Get started</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</>

);
