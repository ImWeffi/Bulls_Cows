import React from "react";
import Modal from "react-modal";
import "../styles/Modal.css";
Modal.setAppElement("#root");

const SettingsModal = ({ isOpen, closeModal, restartGame }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      restartGame = {restartGame}
      contentLabel="Settings Modal"
    >
      <div className="modal">
        <form>
          <input type="number" max="10" min="1" required />
          <button onClick={restartGame}>Change number length</button>
          <button>Reset changes</button>
          <button onClick={closeModal}>Close</button>
        </form>
      </div>
    </Modal>
  );
};

export default SettingsModal;
