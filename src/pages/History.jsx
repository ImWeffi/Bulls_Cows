import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const History = () => {
  const navigate = useNavigate();
  const [historyData, setHistoryData] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("username");
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      fetch(`http://localhost:3002/api/history?user_id=${userId}`)
        .then((response) => response.json())
        .then((data) => setHistoryData(data))
        .catch((error) => console.error("Error fetching game history:", error));
    }
  }, [navigate, userId]);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">History</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <table className="table table-bordered table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Game</th>
                      <th scope="col">Guess</th>
                      <th scope="col">Bulls</th>
                      <th scope="col">Attempts</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyData.map((attempt, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{attempt.guess}</td>
                        <td>{attempt.bulls}</td>
                        <td>{attempt.attempts}</td>
                        <td>{attempt.timer} seconds</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
