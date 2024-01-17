import Header from "../components/Header";
import "../styles/Rules.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

const Rules = () => {
  return (
    <>
      <Header />
      <div className="rules-container">
        <h1 className="rules-heading">Rules of the "Bulls and Cows" Game</h1>
        <p>
          "Bulls and Cows" is a logical game for two players, where one player
          thinks of a three-digit number, and the other player must guess this
          number.
        </p>
        <p>
          The player makes a guess, and the first player reveals the number of
          "bulls" (correct digits in correct positions) and "cows" (correct
          digits in incorrect positions).
        </p>
        <p>
          The goal of the player is to guess the hidden number in the minimum
          number of moves.
        </p>
        <h2 className="sub-heading">Rules:</h2>
        <ul className="rules-list">
          <li>The hidden number consists of three digits.</li>
          <li>Digits cannot be repeated in the hidden number.</li>
          <li>
            The player makes a guess, and they are informed about bulls and
            cows.
          </li>
          <li>The game continues until the player guesses the number.</li>
        </ul>
        <p>
          Good luck in guessing the number and winning the "Bulls and Cows"
          game!
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Rules;
