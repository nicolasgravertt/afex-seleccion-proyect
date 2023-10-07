import { FC } from "react";
import "./ImgPreviewModal.css";
import { Youtubevideo } from "../../../models/youtubeVideo";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedVideo: Youtubevideo;
}

const ImgPreviewModal: FC<ModalProps> = ({
  isOpen,
  onClose,
  selectedVideo,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="preview-modal-overlay">
      <div className="preview-modal">
        <div className="preview-modal-content">
          <div className="preview-youtube-video">
            <iframe
              id="ytplayer"
              width="100%"
              height="100%"
              src={selectedVideo.videoUrl}
              allow="autoplay"
            ></iframe>
          </div>
          <div className="preview-youtube-data">
            <h1>{selectedVideo.title}</h1>
            <p>{selectedVideo.description}</p>
          </div>
          <button className="preview-modal-close-button" onClick={onClose}>
            <span className="preview-icon">&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImgPreviewModal;
