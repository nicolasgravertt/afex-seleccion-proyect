import React from "react";
import { Youtubevideo } from "../../../models/youtubeVideo";
import "./ImgPreview.css";

interface ImgPreviewProps {
  id: string;
  title: string;
  thumbnail: string;
  setSelectedVideo: (youtubeData: Youtubevideo) => void;
  openVideoDeleteModal: () => void;
  handleOpenPreviewVideoModal: (id: string) => void;
}

const ImgPreview: React.FC<ImgPreviewProps> = ({
  id,
  title,
  thumbnail,
  setSelectedVideo,
  openVideoDeleteModal,
  handleOpenPreviewVideoModal,
}) => {
  const initialData = {
    _id: "",
    title: "",
    description: "",
    thumbnail: "",
    videoUrl: "",
  };

  const handleDeleteModal = () => {
    setSelectedVideo({ ...initialData, _id: id });
    openVideoDeleteModal();
  };

  return (
    <div key={id} className="img-grid-item">
      <button
        onClick={handleDeleteModal}
        className="img-grid-item-close-button"
      >
        <span className="img-grid-item-icon">&times;</span>
      </button>
      <img
        onClick={() => handleOpenPreviewVideoModal(id)}
        id={id}
        src={thumbnail}
        alt={title}
      ></img>
    </div>
  );
};

export default ImgPreview;
