import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useFormik } from "formik";
import * as yup from "yup";
import { login } from "../../../services/auth";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../../models/auth";
import { useSnackbar } from "notistack";
import { Email, Password } from "../../../assets/Login";
import "./Login.css";

const Login: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("URL is required "),
      password: yup.string().min(4).required("clave requerida."),
    }),
    onSubmit: (values, { resetForm }) => {
      onLoginSubmit(values);
      resetForm();
    },
  });

  const onLoginSubmit = async (user: User) => {
    setIsLoading(true);
    try {
      const accessToken = await login(user);
      setAuth({
        ...user,
        accessToken: accessToken,
      });
      navigate("/ytvideomanager", { replace: true });
      // navigate(from, { replace: true });
    } catch (error) {
      enqueueSnackbar(`${error}`, {
        variant: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="login-container">
          <div className="login-grid-form">
            <div className="login-header">
              <div className="login-text">Iniciar Sesión</div>
              <div className="login-underline"></div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="login-inputs">
                <div className="login-input-container">
                  <div className="login-input">
                    <img src={Email} alt="email"></img>
                    <input
                      autoComplete="false"
                      id="username"
                      name="username"
                      type="username"
                      placeholder="Nombre de usuario"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    ></input>
                  </div>
                </div>
                <div className="login-input-container">
                  <div className="login-input">
                    <img src={Password} alt="clave"></img>
                    <input
                      autoComplete="false"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Clave"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    ></input>
                  </div>
                </div>
                <div className="login-forgot-password">
                  ¿Olvidaste tu contraseña?{" "}
                  <span>
                    <Link to={"/passwordrecovery"}>Haz clic aquí!</Link>
                  </span>
                </div>
                <div className="login-forgot-password">
                  <span>
                    <Link to={"/register"}>Registrate aquí</Link>
                  </span>
                </div>
                <div className="login-submit-container">
                  <button type="submit" className="login-submit">
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
