import axios from "axios";

const URL = {
  prod: "asd",
  dev: "http://localhost:3001",
};

const baseUrl = URL.prod;

const api = axios.create({
  baseURL: `${baseUrl}/api/v1`,
});

const auth = axios.create({
  baseURL: `${baseUrl}/api/v1/auth`,
});

auth.defaults.headers.common.Authorization = null;

export default {
  api,
  auth,
};
