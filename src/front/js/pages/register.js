import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import styles from "../../styles/register.css";

export const Register = () => {

    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, first_name, last_name, password }),
          });
    
          if (response.ok) {
            console.log("User created");
          } else {
            console.error("Error creating user. Maybe you are using an existing email?");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

  return (
    <>
    <div className="container-register">
          <div className="form-head">
              <h1>Registrate</h1>
          </div>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="InputEmail1"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                  <spam id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                  </spam>
              </div>

              <div className="form-group">
                  <label for="inputFirstName">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputNameRegister"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
              </div>

              <div className="form-group">
                  <label for="inputFirstName">Last Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="InputLastNameRegister"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
              </div>

              <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="InputPassword1"
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
              </div>
              <button type="submit" className="btn btn-primary">
                  Submit
              </button>
              <Link to='/login'>
              <h5>Ya estas registrado? Conectate!</h5>
              </Link>
          </form>
    </div>

    </>
  );
};
