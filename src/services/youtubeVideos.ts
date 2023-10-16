import { AxiosError, AxiosInstance } from "axios";
import { Youtubevideo } from "../models/youtubeVideo";
// import youtubeVideoApi from "../api/youtube/youtubeVideo";

export const getYoutubeVideos = async (
  axiosPrivate: AxiosInstance
): Promise<Youtubevideo[]> => {
  try {
    const response = await axiosPrivate.get("/youtube");
    return response.data as Youtubevideo[];
  } catch (error) {
    if (isAxiosError(error)) {
      // This is an Axios-specific error
      throw new Error(`${error.response?.data}`);
    }
    // Handle or rethrow other errors
    throw new Error(`${error}`);
  }
};

export const saveYoutubeVideo = async (
  youtubeId: string | null,
  axiosPrivate: AxiosInstance
) => {
  try {
    const response = await axiosPrivate.post("/youtube", { youtubeId });
    const data = response.data;
    return data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      // This is an Axios-specific error
      throw new Error(`${error.response?.data}`);
    }
    // Handle or rethrow other errors
    throw new Error(`${error}`);
  }
};

export const deleteYoutubeVideo = async (
  youtubeId: string,
  axiosPrivate: AxiosInstance
) => {
  try {
    const response = await axiosPrivate.delete(`/youtube/${youtubeId}`);
    return response;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      // This is an Axios-specific error
      throw new Error(`${error.response?.data}`);
    }
    // Handle or rethrow other errors
    throw new Error(`${error}`);
  }
};

// Custom type guard to check if error is an AxiosError
function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError === true;
}
