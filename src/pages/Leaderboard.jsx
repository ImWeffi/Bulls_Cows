import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = () => {
    fetch("http://localhost:3002/api/leaderboard")
      .then((response) => response.json())
      .then((data) => {
        setLeaderboard(data);
      })
      .catch((error) => console.error("Error fetching leaderboard:", error));
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4">Leaderboard</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <table className="table table-bordered table-hover">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Top</th>
                      <th scope="col">Username</th>
                      <th scope="col">Bulls</th>
                      <th scope="col">Attempts</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((record, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{record.username}</td>
                        <td>{record.bulls}</td>
                        <td>{record.attempts}</td>
                        <td>{record.timer} seconds</td>
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
}

export default Leaderboard;
