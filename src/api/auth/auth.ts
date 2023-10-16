import { api } from "../axios/axios";
import { User } from "../../models/auth";

const login = ({ username, password }: User) => {
  return api.post(
    "/auth",
    { user: username, pwd: password },
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
};

const register = ({ username, password }: User) => {
  return api.post("/register", { user: username, pwd: password });
};

const logout = () => {
  return api.delete(`/logout`);
};

export default {
  login,
  register,
  logout,
};
