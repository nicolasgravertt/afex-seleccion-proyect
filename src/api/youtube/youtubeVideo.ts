import axiosInstance from "../axios/axios";

const get = () => {
  return axiosInstance.api.get("/youtube");
};

const create = (youtubeId: string) => {
  return axiosInstance.api.post("/youtube", { youtubeId });
};

const remove = (id: number) => {
  return axiosInstance.api.delete(`/youtube/${id}`);
};

export default {
  get,
  create,
  remove,
};
