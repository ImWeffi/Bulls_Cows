import React from "react";
import { useGameAttempts } from "../components/GameAttemptsContext";

const History = () => {
  const { gameAttempts } = useGameAttempts();

  return (
    <>
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
                  {attempt.guess} - Bulls: {attempt.bulls} Cows: {attempt.cows}{" "}
                  Time: {attempt.timer} seconds
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
