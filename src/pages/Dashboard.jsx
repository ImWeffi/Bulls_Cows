import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("username");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  const handleDeleteProfile = () => {
    console.log("Profile deleted!");
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
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
    </>
  );
};

export default Dashboard;
