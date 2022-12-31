import { saveAs } from 'file-saver';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './static-modal.scss';

interface StaticModalProps {
  modalButtonActive: boolean;
  handleClose: any;
  showModal: boolean;
  modalText?: string;
  modalTitle?: string;
  modalImage?: string;
  downloadResume?: string;
  downloadBtn?: boolean;
  children?: any;
}

const StaticModal: React.FC<StaticModalProps> = ({
  handleClose,
  showModal,
  modalText,
  modalTitle,
  downloadResume,
  downloadBtn,
  children
}) => {
  return (
    <React.Fragment>
      <Modal show={showModal} onHide={handleClose}>
        {modalTitle && (
          <Modal.Header>
            <Modal.Title>{modalTitle}</Modal.Title>
          </Modal.Header>
        )}

        <Modal.Body className="w-100">{children}</Modal.Body>
        <Modal.Footer>
          {downloadBtn && (
            <Button
              onClick={() =>
                saveAs('/assets/cv.62c18a6e.jpg', 'cv-ethan-taylan.jpg')
              }
              className="modal-btn"
            >
              {downloadResume}
            </Button>
          )}

          <Button className="modal-btn" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default StaticModal;
