import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function SettingsModal({
  onRestart,
  onNumberLengthChange,
  defaultNumberLength,
}) {
  const [show, setShow] = useState(false);
  const [selectedNumberLength, setSelectedNumberLength] = useState(defaultNumberLength);
  const [hasChanged, setHasChanged] = useState(false);

  const handleNumberLengthChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    setSelectedNumberLength(selectedValue);
    onNumberLengthChange(selectedValue);
    setHasChanged(true);
  };

  const handleClose = () => {
    if (hasChanged) {
      return;
    }
    setShow(false);
  };

  const handleRestartAndClose = () => {
    onRestart();
    setShow(false);
    setHasChanged(false);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Settings
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton={!hasChanged}>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="numberLength">Change Number Length:</label>
          <select
            id="numberLength"
            onChange={handleNumberLengthChange}
            value={selectedNumberLength}
            required
          >
            {Array.from({ length: 9 }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleRestartAndClose}>
            Restart Game
          </Button>
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={hasChanged}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsModal;
