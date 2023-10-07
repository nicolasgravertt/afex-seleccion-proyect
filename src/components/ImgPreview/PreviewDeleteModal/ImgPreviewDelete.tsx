import { FC } from "react";
import "./ImgPreviewDelete.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleDelete: (result: boolean) => void;
}

const ImgPreviewDelete: FC<ModalProps> = ({
  isOpen,
  onClose,
  handleDelete,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="delete-modal-overlay">
      <div className="delete-modal">
        <div className="delete-modal-content">
          <div className="delete-modal-title">
            <h1>¿Seguro que quieres eliminar este video?</h1>
          </div>
          <div className="delete-modal-buttons">
            <button
              className="cancel-button"
              onClick={() => handleDelete(false)}
            >
              Cancelar
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(true)}
            >
              Eliminar
            </button>
          </div>
        </div>
        <button className="delete-modal-close-button" onClick={onClose}>
          <span className="delete-modal-icon">&times;</span>
        </button>
      </div>
    </div>
  );
};
export default ImgPreviewDelete;
