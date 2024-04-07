import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AttemptsList from "../components/AttemptsList";

const History = ({ attempts }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("username");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
    <Header/>
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Attempts</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <AttemptsList attempts={attempts} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};


export default History;
