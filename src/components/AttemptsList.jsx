import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
const AttemptsList = ({ attempts = [] }) => {
  return (
    <div className="attempts-list ">
      <h3>Attempts List:</h3>
      <ul className="list-group list-group-flush">
        {attempts.map((attempt, index) => (
          <li className="list-group-item" key={index}>
            {attempt.guess}  {attempt.result} {attempt.timer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttemptsList;
