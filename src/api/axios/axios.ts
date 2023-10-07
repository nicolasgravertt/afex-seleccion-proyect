import axios from "axios";

const URL = {
  prod: "",
  dev: "http://localhost:3500",
};

const baseUrl = URL.dev;

const api = axios.create({
  baseURL: `${baseUrl}`,
});

export default {
  api,
};
