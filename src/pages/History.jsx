import React from "react";
import { useGameAttempts } from "../components/GameAttemptsContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const History = () => {
  const { gameAttempts } = useGameAttempts();

  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Game Attempts History</h2>
            <ul className="list-group">
              {gameAttempts.map((attempt, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {attempt.guess} - {attempt.result}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
