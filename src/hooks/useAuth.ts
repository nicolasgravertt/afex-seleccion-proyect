import { useContext, Dispatch, SetStateAction } from "react";
import AuthContext from "../context/AuthProvider";
import { User } from "../models/auth";

const useAuth = () => {
  type ContextProps = {
    auth: User;
    setAuth: Dispatch<SetStateAction<User>>;
  };

  return useContext(AuthContext) as ContextProps;
};

export default useAuth;
