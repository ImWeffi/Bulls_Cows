import React from 'react';
import Modal from 'react-modal';
import '../styles/Modal.css'
Modal.setAppElement('#root');

const SettingsModal = ({ isOpen, closeModal }) => {


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Settings Modal"
    >
      
    
      <button variant="primary">Change number length</button>
      <button>Reset changes</button>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default SettingsModal;