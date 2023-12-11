import React, { useState, memo } from "react";
import { Youtubevideo } from "../../../models/youtubeVideo";
import {} from "../../../services/youtubeVideos";
import { ImgPreviewModal, ImgPreviewDelete } from "../../ImgPreview";
import "./ImgPreview.css";

interface ImgPreviewProps {
  youtubeVideos: Youtubevideo[];
  onDeleteYoutubeVideo: (id: string) => Promise<void>;
}

const ImgPreview: React.FC<ImgPreviewProps> = ({
  youtubeVideos,
  onDeleteYoutubeVideo,
}) => {
  const initialData = {
    _id: "",
    title: "",
    description: "",
    thumbnail: "",
    videoUrl: "",
    videoDuration: "",
  };

  const [selectedVideo, setSelectedVideo] = useState<Youtubevideo>(initialData);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isVideoDeleteModalOpen, setIsVideoDeleteModalOpen] = useState(false);

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

  const handleOpenPreviewVideoModal = (id: string) => {
    const selectedVideo = youtubeVideos.filter(
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
    }
    closeVideoDeleteModal();
  };

  const handleDeleteModal = (id: string) => {
    const selectedVideo = youtubeVideos.filter(
      (youtubeVideo) => youtubeVideo._id === id
    );
    setSelectedVideo({
      ...selectedVideo[0],
    });
    openVideoDeleteModal();
  };

  return (
    <>
      <div className="img-container">
        <div className="img-grid">
          {youtubeVideos.map((youtubeVideo: Youtubevideo) => (
            <div key={youtubeVideo._id} className="img-grid-item">
              <button
                onClick={() => handleDeleteModal(youtubeVideo._id)}
                className="img-grid-item-close-button"
              >
                <span className="img-grid-item-icon">&times;</span>
              </button>
              <img
                onClick={() => handleOpenPreviewVideoModal(youtubeVideo._id)}
                id={youtubeVideo._id}
                src={youtubeVideo.thumbnail}
                alt={youtubeVideo.title}
              ></img>
              <p className="img-grid-item-video-duration">
                {youtubeVideo.videoDuration}
              </p>
            </div>
          ))}
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
      </div>
    </>
  );
};

const MemoizedImgPreview = memo(ImgPreview);

export default MemoizedImgPreview;
