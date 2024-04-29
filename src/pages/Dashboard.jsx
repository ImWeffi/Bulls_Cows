import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("username");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  const handleDeleteProfile = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setShowDeleteConfirmation(false);
  };

  const confirmDeleteProfile = () => {
    axios
      .post("http://localhost:3002/api/deleteProfile", { user_id })
      .then((response) => {
        console.log(response.data.message);
        navigate("/login");
        localStorage.removeItem("username");
        localStorage.removeItem("user_id");
      })
      .catch((error) => {
        console.error("Error occurred during profile deletion:", error);
      });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setErrorMessage("");
  };

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New password and confirm password do not match");
      return;
    }

    axios
      .post("http://localhost:3002/api/changePassword", {
        user_id: localStorage.getItem("user_id"),
        currentPassword,
        newPassword,
      })
      .then((response) => {
        console.log(response.data.message);
        setShowModal(false);
        setCurrentPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        setErrorMessage("");
      })
      .catch((error) => {
        console.error("Error occurred during password change:", error);
        setErrorMessage("Error occurred during password change");
      });
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-center mb-4">
                  Welcome, {localStorage.getItem("username")}!
                </h1>
                <br />
                <div className="d-flex flex-column align-items-center">
                  <button
                    className="btn btn-secondary btn-block mb-3"
                    onClick={() => setShowModal(true)}
                  >
                    Change Password
                  </button>
                  <button
                    className="btn btn-danger btn-block mb-3 "
                    onClick={handleDeleteProfile}
                  >
                    Delete Profile
                  </button>
                  <button
                    className="btn btn-primary btn-block mb-3"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="currentPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="newPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="confirmNewPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </Form.Group>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleChangePassword}>
            Change Password
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showDeleteConfirmation}
        onHide={handleCloseDeleteConfirmation}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Profile?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete your profile?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmation}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteProfile}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dashboard;
