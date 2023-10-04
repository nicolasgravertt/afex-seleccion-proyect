import React from "react";
import ImgPreview from "../../components/ImgPreview/ImgPreview";

const YoutubeDisplayer = () => {
  return (
    <div>
      <div>
        <form>
          <h1>Añadir nuevo video</h1>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
      <ImgPreview />
    </div>
  );
};

export default YoutubeDisplayer;
