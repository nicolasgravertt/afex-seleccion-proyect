import { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

const ImgPreviewModal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default ImgPreviewModal;
