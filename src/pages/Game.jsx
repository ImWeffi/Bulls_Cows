import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Game.css";
import AttemptsList from "../components/AttemptsList";
import SettingsModal from "../components/SettingsModal";
import Footer from "../components/Footer";


const Game = (props) => {
  const [numberLength, setNumberLength] = useState(3);
  const [randomNumber, setRandomNumber] = useState(genrateThreeDigitNumber());
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [timer, setTimer] = useState(0);
  const [gameWon, setGameWon] = useState(false)

  function genrateThreeDigitNumber() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let secret = "";

    const firstIndex = Math.floor(Math.random() * numbers.length);
    secret += numbers[firstIndex];
    numbers.splice(firstIndex, 1);

    for (let i = 0; i < numberLength - 1; i++) {
      const index = Math.floor(Math.random() * numbers.length);
      secret += numbers[index];
      numbers.splice(index, 1);
    }

    return secret;
  }

  function handleGuessChange(event) {
    const value = event.target.value;
    if (/^[1-9][0-9]*$/.test(value) || value === "") {
      const uniqueDigits = new Set(value.split(""));
      if (uniqueDigits.size === value.length) {
        setGuess(value);
      }
    }
  }

  function calculateBullsAndCows() {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < numberLength; i++) {
      if (parseInt(guess[i]) === parseInt(randomNumber[i])) {
        bulls++;
      } else if (randomNumber.includes(guess[i])) {
        cows++;
      }
    }
    return { bulls, cows };
  }

  function guessSumbit(event) {
    event.preventDefault();
    const { bulls, cows } = calculateBullsAndCows();
    const attemptResult = {
      guess,
      result: `Bulls: ${bulls} Cows: ${cows} Time: ${timer} seconds.`,
      timer,
    };

    if (attempts.some((attempt) => attempt.guess === guess)) {
      setFeedback("You already made this guess. Try a different one.");
    } else {
      setAttempts([...attempts, attemptResult]);

      if (bulls === numberLength) {
        setAttempts(attemptResult);
        alert(`Congrats, you win! Bulls: ${bulls}`);
        setTimer(0);
        setGuess("");
        setGameWon(true);
      } else {
        setFeedback(`Bulls: ${bulls} Cows: ${cows} Try again!`);
      }
    }
  }

  useEffect(() => {
    let interval;
    if (guess !== "") {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [guess]);

  function restartGame() {
    startNewGame(numberLength);
    setGameWon(false);
  }

  function startNewGame(numberLength) {
    setRandomNumber(genrateThreeDigitNumber(numberLength));
    setGuess("");
    setFeedback("");
    setAttempts([]);
    setTimer(0);
    setNumberLength(numberLength);
  }

  useEffect(() => {
    startNewGame(numberLength);
  }, [numberLength], [attempts]);

  const handleRestart = () => {
    startNewGame(numberLength);
    setGameWon(false);
  };

  const handleNumberLengthChangeModal = (newNumberLength) => {
    startNewGame(newNumberLength);
  };

  console.log("Random number:" + randomNumber);
  console.log("Number length:" + numberLength);

  return (
    <>
      <Header />
      <div className="game">
        <form onSubmit={guessSumbit}>
          <input
            id="guess"
            type="text"
            pattern="\d*"
            value={guess}
            onChange={handleGuessChange}
            onKeyUp={handleGuessChange}
            minLength={numberLength}
            maxLength={numberLength}
            required
            disabled={gameWon}
          />
          <div className="btn-group" role="group">
            <button className="btn btn-success" type="sumbit">
              Try to guess
            </button>
            <button className="btn btn-danger" onClick={restartGame}>
              Restart
            </button>
          </div>

          <p>
            You play <strong>{timer} </strong>seconds
          </p>
          <p>
            Your number length:<strong>{numberLength}</strong>
          </p>
        </form>

        <div>
          <SettingsModal
            onRestart={handleRestart}
            onNumberLengthChange={handleNumberLengthChangeModal}
          />
        </div>
        <p>{feedback}</p>
        <AttemptsList attempts={attempts} /> 
      </div>
      <Footer />
    </>
  );
};
export default Game;
