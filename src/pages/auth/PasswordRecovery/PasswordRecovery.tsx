import React from "react";
import { Email } from "../../../assets/Login";
import "./PasswordRecovery.css";

const Login: React.FC = () => {
  return (
    <>
      <div className="pwd-recovery-container">
        <div className="pwd-recovery-grid-form">
          <div className="pwd-recovery-header">
            <div className="pwd-recovery-text">Recuperar Contraseña</div>
            <div className="pwd-recovery-underline"></div>
          </div>
          <div className="pwd-recovery-inputs">
            <div className="pwd-recovery-input-container">
              <div className="pwd-recovery-input">
                <img src={Email} alt=""></img>
                <input type="email" placeholder="Email"></input>
              </div>
            </div>
            <div className="pwd-recovery-submit-container">
              <div className="pwd-recovery-submit">Recuperar Contraseña</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
