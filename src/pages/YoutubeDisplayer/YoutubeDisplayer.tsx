import ImgPreview from "../../components/ImgPreview/ImgPreview";
import "./YoutubeDisplayer.css";

const YoutubeDisplayer = () => {
  return (
    <div className="container">
      <div className="form-container">
        <form>
          <div className="titulo">
            <h1>Añadir nuevo video</h1>
          </div>
          <div className="text">
            <div className="input">
              <input type="text" placeholder="Añadir"></input>
            </div>
            <div className="submit">Añadir</div>
          </div>
        </form>
      </div>
      <div className="img-container">
        <div className="img-grid">
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
          <div className="img-grid-item">
            <ImgPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeDisplayer;
