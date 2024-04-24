import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("username");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const username = localStorage.getItem("username");
  const user_id = localStorage.getItem("user_id");

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    navigate("/login");
  };

  const handleDeleteProfile = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    axios
      .post("http://localhost:3002/api/deleteProfile", { user_id })
      .then((response) => {
        console.log(response.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error occurred during profile deletion:", error);
      });
  };

  const closeModal = () => {
    setShowModal(false);
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
                  Welcome, {username}!
                </h1>
                <br />
                <button
                  className="btn btn-primary btn-block mb-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="btn btn-danger btn-block mb-3"
                  onClick={handleDeleteProfile}
                >
                  Delete Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your profile?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Dashboard;
