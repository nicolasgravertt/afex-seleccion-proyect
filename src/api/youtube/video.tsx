import axiosInstance from "../axios/axios";

const get = () => {
  return axiosInstance.api.get("/youtubevideo/");
};

const create = (urlVideo: string) => {
  return axiosInstance.api.post("/youtubevideo/", urlVideo);
};

const remove = (id: number) => {
  return axiosInstance.api.delete(`/youtubevideo/${id}`);
};

const activate = (id: number) => {
  return axiosInstance.api.put(`/youtubevideo/activate/${id}`);
};

const deactivate = (id: number) => {
  return axiosInstance.api.put(`/youtubeVideo/deactivate/${id}`);
};

export default {
  get,
  create,
  remove,
  activate,
  deactivate,
};
