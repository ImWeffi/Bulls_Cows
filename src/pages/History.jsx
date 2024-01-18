import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const History = ({ attempts }) => {
  return (
    <>
        <Header />
        <div className="history">
          <h2>Game History</h2>
          <ul>
            {attempts &&
              attempts.map((attempt, index) => (
                <li key={index}>{attempt.attemptResult}</li>
              ))}
          </ul>
        </div>
      <Footer />
    </>
  );
};

export default History;
