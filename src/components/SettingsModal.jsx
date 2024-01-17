import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SettingsModal({ onRestart, onNumberLengthChange }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Settings
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />

          <label htmlFor="numberLength">Change Number Length:</label>
          <input
            id="numberLength"
            type="number"
            min="1"
            max="10"
            onChange={(e) => onNumberLengthChange(e.target.value)}
            required
          />
          <Button variant="danger" onClick={onRestart}>
            Restart Game
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;
