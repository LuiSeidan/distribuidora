import React from "react";
import "./Login.css";
// import { red } from "@material-ui/core/colors";

function Login(props) {
  return (
    <div className="container">
      <div className="root-container">
        <div className="box-container">
          <div className="inner-container">
            <div className="header">Login</div>
            <div className="box">
              <div className="input-group">
                <label htmlFor="validateUsername">Usuario</label>
                <input
                  onKeyPress={props.handleKeyPress}
                  ref={props.setRefUser}
                  onChange={props.handleChange}
                  type="text"
                  name="usuario"
                  value={props.usuario}
                  className="login-input"
                  placeholder="Usuario"
                  id="validateUsername"
                  required
                />
              </div>
              <div className="input-group">
                <label>Contraseña</label>
                <input
                  onKeyPress={props.handleKeyPress}
                  ref={props.setRefPass}
                  onChange={props.handleChange}
                  type="password"
                  name="password"
                  value={props.password}
                  className="login-input"
                  placeholder="Contraseña"
                  required
                />
                {props.errorDescription && (
                  <span style={{ color: "red" }}>
                    Usuario o contraseña incorrectos
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="button"
                onClick={props.handleSubmit}
                disabled={props.loading}
              >
                {props.loading ? (
                  <span>Ingresando</span>
                ) : (
                  <span>Ingresar</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
