import React from "react";
import "./ImgPreview.css";

interface ImgPreviewProps {
  id: string;
  title: string;
  thumbnail: string;
}

const ImgPreview: React.FC<ImgPreviewProps> = ({ id, title, thumbnail }) => {
  return (
    <div className="img-grid-item">
      <img id={id} src={thumbnail} alt={title}></img>
    </div>
  );
};

export default ImgPreview;
