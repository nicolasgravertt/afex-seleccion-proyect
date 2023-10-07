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
      // Handle form submission here
      const { youtubeId, isValidated } = validateUrl(values.youtubeUrl);
      if (isValidated) onSaveYoutubeVideoClicked(youtubeId);
    },
  });

  const [youtubeVideoData, setyoutubeVideoData] = useState<Youtubevideo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
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

  const validateUrl = (youtubeUrl: string) => {
    const url = new URL(youtubeUrl);

    // Access parts of the URL
    const host = url.host.trim().toLowerCase(); // "example.com"
    const youtubeId = url.searchParams.get("v"); // URLSearchParams object
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
                />
              ))}
            </div>
          </div>
          <ImgPreviewModal isOpen={isModalOpen} onClose={closeModal}>
            <h1>Datos Video</h1>
          </ImgPreviewModal>
          <ImgPreviewDelete isOpen={isModalOpen} onClose={closeModal}>
            <h1>Datos Video</h1>
          </ImgPreviewDelete>
        </div>
      )}
    </>
  );
};

export default YoutubeDisplayer;
