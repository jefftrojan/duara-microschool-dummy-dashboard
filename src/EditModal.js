import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditModal({ isOpen, onClose, title, content }) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Replace the following input with your editing component */}
        <input type="text" className="form-control" value={content} onChange={(e) => console.log(e.target.value)} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
