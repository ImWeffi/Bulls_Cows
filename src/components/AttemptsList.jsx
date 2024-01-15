import React from "react";
import "../styles/AttemptsList.css";
const AttemptsList = ({ attempts }) => {
  return (
    <div className="attempts-list">
      <h3>Attempts List:</h3>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            {attempt.guess}  {attempt.result} {attempt.timer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttemptsList;
