import React from "react";
import { Email, Password } from "../../../assets/Login";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="grid-form">
          <div className="header">
            <div className="text">Iniciar Sesión</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input-container">
              <div className="input">
                <img src={Email} alt=""></img>
                <input type="email" placeholder="Email"></input>
              </div>
            </div>
            <div className="input-container">
              <div className="input">
                <img src={Password} alt=""></img>
                <input type="password" placeholder="Clave"></input>
              </div>
            </div>
            <div className="forgot-password">
              ¿Olvidaste tu contraseña? <span>Haz clic aquí!</span>
            </div>
            <div className="submit-container">
              <div className="submit">Iniciar Sesión</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
