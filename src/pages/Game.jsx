import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Game.css";
import AttemptsList from "../components/AttemptsList";
import SettingsModal from "../components/SettingsModal";
import Footer from "../components/Footer";
import axios from "axios";

const Game = () => {
  const [numberLength, setNumberLength] = useState(4);
  const [randomNumber, setRandomNumber] = useState(generateThreeDigitNumber());
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [attempts, setAttempts] = useState([]);
  const [timer, setTimer] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("user_id");
    if (userIdFromStorage) {
      setUserId(userIdFromStorage);
    }
  }, []);

  function generateThreeDigitNumber() {
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
    if (userId === null) {
      event.preventDefault();
      setGameWon(true);
    }

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
    if (guess.length !== numberLength) {
      alert(`Please enter a ${numberLength} digit number.`);
      return;
    }
    const { bulls, cows } = calculateBullsAndCows();
    const attemptResult = {
      user_id: userId,
      guess,
      bulls,
      cows,
      timer,
    };
    if (attempts.some((attempt) => attempt.guess === guess)) {
      setFeedback("You already made this guess. Try a different one.");
    } else {
      setAttempts([...attempts, attemptResult]);

      if (bulls === numberLength) {
        saveGameResult(attemptResult);
        setAttempts();
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
    setRandomNumber(generateThreeDigitNumber(numberLength));
    setGuess("");
    setFeedback("");
    setAttempts([]);
    setTimer(0);
    setNumberLength(numberLength);
  }

  function saveGameResult(result) {
    axios
      .post("http://localhost:3002/api/results", result)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }

  const handleRestart = () => {
    startNewGame(numberLength);
    setGameWon(false);
  };

  const handleNumberLengthChangeModal = (newNumberLength) => {
    startNewGame(newNumberLength);
  };

  console.log("Random number:" + randomNumber);
  console.log("Number length:" + numberLength);
  console.log("User ID:", userId);
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="game text-center">
          <h4>Bulls And Cows Game!</h4>
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
              size={numberLength}
              disabled={gameWon}
              required
            />

            <p>
              Write <strong>{numberLength} </strong>number length number
            </p>

            <div className="btn-group" role="group">
              <button
                className="btn btn-success"
                type="sumbit"
                disabled={gameWon}
              >
                Try to guess
              </button>
              <button className="btn btn-danger" onClick={restartGame}>
                Restart
              </button>
              <SettingsModal
                onRestart={handleRestart}
                onNumberLengthChange={handleNumberLengthChangeModal}
                defaultNumberLength={numberLength}
              />
            </div>
          </form>

          <p className="mt-3">{feedback}</p>
          <AttemptsList attempts={attempts} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Game;
