import Header from "../components/Header";
import "../styles/AttemptsList.css";
const History = ({attempts}) => {
  return (
    <div>
      <Header />
      <div className="attempts-list">
      <h2>Game History</h2>
      <ul>
        {attempts && attempts.map((attempt, index) => (
          <li key={index}>{attempt.attemptResult}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default History;
