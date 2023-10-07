import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  ImgPreview,
  ImgPreviewModal,
  ImgPreviewDelete,
} from "../../components/ImgPreview";
import youtubeVideoApi from "../../api/youtube/youtubeVideo";
import { Youtubevideo } from "../../models/youtubeVideo";
import "./YoutubeDisplayer.css";

const YoutubeDisplayer: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      youtubeUrl: "",
    },
    validationSchema: yup.object({
      youtubeUrl: yup
        .string()
        .url("Must be a valid URL, Example (https://youtube.com)")
        .required("URL is required "),
    }),
    onSubmit: (values) => {
      const { youtubeId, isValidated } = validateUrl(values.youtubeUrl);
      if (isValidated) onSaveYoutubeVideoClicked(youtubeId);
    },
  });

  const initialData = {
    _id: "",
    title: "",
    description: "",
    thumbnail: "",
    videoUrl: "",
  };

  const [youtubeVideoData, setyoutubeVideoData] = useState<Youtubevideo[]>([]);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoDeleteModalOpen, setIsVideoDeleteModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Youtubevideo>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const openVideoDeleteModal = () => {
    setIsVideoDeleteModalOpen(true);
  };

  const closeVideoDeleteModal = () => {
    setIsVideoDeleteModalOpen(false);
  };

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  const onSaveYoutubeVideoClicked = async (youtubeId: string) => {
    setIsLoading(true);
    try {
      const response = await youtubeVideoApi.create(youtubeId);
      const data = response.data;
      setyoutubeVideoData([...youtubeVideoData, data]);
    } catch (error) {
      // setError("Error al obtener datos del servidor");
      // setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteYoutubeVideo = async (youtubeId: string) => {
    try {
      const response = await youtubeVideoApi.remove(youtubeId);
      if (response.data) {
        const filteredArray = youtubeVideoData.filter(
          (youtubeVideo) => youtubeVideo._id !== youtubeId
        );
        setyoutubeVideoData([...filteredArray]);
        closeVideoDeleteModal();
      }
    } catch (error) {
      // setError("Error al obtener datos del servidor");
      // setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenPreviewVideoModal = (id: string) => {
    const selectedVideo = youtubeVideoData.filter(
      (youtubeVideo) => youtubeVideo._id === id
    );
    const url = new URL(selectedVideo[0].videoUrl);
    const youtubeId = url.searchParams.get("v") || "";
    setSelectedVideo({
      ...selectedVideo[0],
      videoUrl: `https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1`,
    });
    openVideoModal();
  };

  const handleDeleteConfirmation = (result: boolean) => {
    if (result === true) {
      onDeleteYoutubeVideo(selectedVideo._id);
    } else {
      closeVideoDeleteModal();
    }
  };

  const validateUrl = (youtubeUrl: string) => {
    const url = new URL(youtubeUrl);
    const host = url.host.trim().toLowerCase(); // "www.youtube.com"
    const youtubeId = url.searchParams.get("v"); // URLSearchParams
    if (host !== "www.youtube.com" || youtubeId === null)
      return { youtubeId: "", isValidated: false };
    return {
      youtubeId,
      isValidated: true,
    };
  };

  const fetchYoutubeVideoData = async () => {
    try {
      const response = await youtubeVideoApi.get();
      const data = response.data;
      setyoutubeVideoData(data);
    } catch (err) {
      // setError("Error al obtener datos del servidor");
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchYoutubeVideoData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <div className="form-container">
            <div className="form-container-title">
              <h1>Añadir nuevo video</h1>
            </div>
            <div className="form-container-form">
              <form onSubmit={formik.handleSubmit}>
                <div className="text">
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Youtube URL"
                      id="youtubeUrl"
                      name="youtubeUrl"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.youtubeUrl}
                    ></input>
                  </div>
                  <button type="submit" className="submit">
                    Añadir
                  </button>
                </div>
                {formik.touched.youtubeUrl && formik.errors.youtubeUrl && (
                  <div className="error">{formik.errors.youtubeUrl}</div>
                )}
              </form>
            </div>
          </div>
          <div className="img-container">
            <div className="img-grid">
              {youtubeVideoData.map((youtubeVideo: Youtubevideo) => (
                <ImgPreview
                  key={youtubeVideo._id}
                  id={youtubeVideo._id}
                  title={youtubeVideo.title}
                  thumbnail={youtubeVideo.thumbnail}
                  openVideoDeleteModal={openVideoDeleteModal}
                  handleOpenPreviewVideoModal={handleOpenPreviewVideoModal}
                  setSelectedVideo={setSelectedVideo}
                />
              ))}
            </div>
          </div>
          <ImgPreviewModal
            isOpen={isVideoModalOpen}
            onClose={closeVideoModal}
            selectedVideo={selectedVideo}
          />
          <ImgPreviewDelete
            isOpen={isVideoDeleteModalOpen}
            onClose={closeVideoDeleteModal}
            handleDelete={handleDeleteConfirmation}
          />
        </div>
      )}
    </>
  );
};

export default YoutubeDisplayer;
