import React from "react";
import { Email } from "../../../assets/Login";
import "./PasswordRecovery.css";

const Login: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="grid-form">
          <div className="header">
            <div className="text">Recuperar Contraseña</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input-container">
              <div className="input">
                <img src={Email} alt=""></img>
                <input type="email" placeholder="Email"></input>
              </div>
            </div>
            <div className="submit-container">
              <div className="submit">Recuperar Contraseña</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
