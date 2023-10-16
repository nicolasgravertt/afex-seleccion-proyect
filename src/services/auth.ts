import { AxiosError } from "axios";
import { User } from "../models/auth";
import authApi from "../api/auth/auth";

export const login = async (user: User) => {
  try {
    const response = await authApi.login(user);
    const { accessToken } = response.data;
    return accessToken as string;
  } catch (error) {
    if (isAxiosError(error)) {
      if (!error?.response) {
        throw new Error(`No Server Response`);
      } else if (error.response?.status === 400) {
        throw new Error(`Missing username or password`);
      } else if (error.response?.status === 401) {
        throw new Error(`Unauthorized`);
      }
      throw new Error(`${error.response?.data}`);
    }
    throw new Error(`${error}`);
  }
};

export const register = async (user: User) => {
  try {
    const response = await authApi.register(user);
    const data = response.data;
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (!error?.response) {
        throw new Error(`No Server Response`);
      } else if (error.response?.status === 400) {
        throw new Error(`Missing username or password`);
      } else if (error.response?.status === 401) {
        throw new Error(`Unauthorized`);
      }
      throw new Error(`${error.response?.data}`);
    }
    throw new Error(`${error}`);
  }
};

export const logout = async () => {
  try {
    const response = await authApi.logout();
    return response;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(`${error.response?.data}`);
    }
    throw new Error(`${error}`);
  }
};

// Custom type guard to check if error is an AxiosError
function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}
