import axiosInstance from "../axios/axios";
const get = () => {
  return axiosInstance.api.get("/youtube");
};

const create = (youtubeId: string | null) => {
  return axiosInstance.api.post("/youtube", { youtubeId });
};

const remove = (id: string) => {
  return axiosInstance.api.delete(`/youtube/${id}`);
};

export default {
  get,
  create,
  remove,
};
