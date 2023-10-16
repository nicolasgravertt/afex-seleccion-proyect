import { useEffect } from "react";
import { privateApi } from "../api/axios/axios";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = privateApi.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = privateApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return privateApi(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      privateApi.interceptors.response.eject(responseIntercept);
      privateApi.interceptors.request.eject(requestIntercept);
    };
  }, [auth, refresh]);

  return privateApi;
};

export default useAxiosPrivate;
