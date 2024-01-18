import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SettingsModal({ onRestart, onNumberLengthChange }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNumberLengthChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    onNumberLengthChange(selectedValue);
  };

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
          <select
            id="numberLength"
            onChange={handleNumberLengthChange}
            defaultValue="1"
            required
          >
            {Array.from({ length: 9 }, (_, index) => index + 1).map(
              (number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              )
            )}
          </select>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={onRestart}>
            Restart Game
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;
