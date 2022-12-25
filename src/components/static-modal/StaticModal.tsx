import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './static-modal.scss'

interface StaticModalProps {
	modalButtonActive: boolean;
  handleClose: any;
  handleShow: any;
  showModal: boolean;
  modalText: string;
  modalTitle: string;
}

const StaticModal: React.FC<StaticModalProps> = ({
  handleClose,
  showModal,
  modalText,
  modalTitle
}) => {

	return (
		<>
			<Modal
				show={showModal}
				onHide={handleClose}
			>
				<Modal.Header>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modalText}</Modal.Body>
				<Modal.Footer>
					<Button
						className='modal-btn'
						onClick={handleClose}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default StaticModal;
