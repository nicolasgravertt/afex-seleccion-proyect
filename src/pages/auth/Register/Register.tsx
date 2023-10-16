import React from "react";
import { Person, Email, Password } from "../../../assets/Login";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <>
      <div className="register-container">
        <div className="register-grid-form">
          <div className="register-header">
            <div className="register-text">Registrarse</div>
            <div className="register-underline"></div>
          </div>
          <div className="register-inputs">
            <div className="register-input-container">
              <div className="register-input">
                <img src={Person} alt=""></img>
                <input type="text" placeholder="Nombre"></input>
              </div>
            </div>
            <div className="register-input-container">
              <div className="register-input">
                <img src={Email} alt=""></img>
                <input type="email" placeholder="Email"></input>
              </div>
            </div>
            <div className="register-input-container">
              <div className="register-input">
                <img src={Password} alt=""></img>
                <input type="password" placeholder="Clave"></input>
              </div>
            </div>
            <div className="register-forgot-password">
              ¿Olvidaste tu contraseña? <span>Haz clic aquí!</span>
            </div>
            <div className="register-submit-container">
              <div className="register-submit">Registrarse</div>
              <div className="register-submit">Iniciar Sesión</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
