import React, { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";

export const LoginUser = () => {

  const initialForm = {
    email: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/login-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        const token = data.token;
        const id = data.user_id;
        const email = data.email;

        localStorage.setItem("id", id);
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
        setForm(initialForm);
        setLoginError(false);
        navigate("/user-view");
      } else {
        const errorData = await response.json();
        setLoginError(true);
        console.error(errorData.msg);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoginError(true);
    }

  };

  return (
    <div className="container py-2 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card shadow" style={{ borderRadius: "1rem",backgroundColor: "transparent"  }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5">
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fa-solid fa-paw  fa-2x me-3"
                        style={{ color: "#FF914D" }}
                      />
                      <h1 className="mb-0">Usuario</h1>
                    </div>
                    {loginError && (
                      <p>Usuario o contraseña incorrectos</p>
                    )}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="form-control form-control-lg"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        className="form-control form-control-lg"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                      />
                    </div>
                    <div className="pt-1 mb-4">
                      <button className="btn btn-lg btn-block shadow-sm" type="submit" style={{backgroundColor: "#ff914d"}}>
                        Iniciar Sesión
                      </button>
                    </div>
                    <p className="mb-5 pb-lg-2 text-muted">
                      ¿No tienes cuenta?{" "}
                      <a href="/register">
                        Registrate
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
