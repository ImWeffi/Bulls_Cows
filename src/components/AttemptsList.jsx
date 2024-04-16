import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AttemptsList = ({ attempts = [] }) => {
  return (
    <div className="attempts-list">
      <h3>Attempts List</h3>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Guess</th>
            <th scope="col">Bulls</th>
            <th scope="col">Cows</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {attempts.map((attempt, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{attempt.guess}</td>
              <td>{attempt.bulls}</td>
              <td>{attempt.cows}</td>
              <td>{attempt.timer} Seconds</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttemptsList;
