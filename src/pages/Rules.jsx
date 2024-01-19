import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Rules.css";
const Rules = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title rules-heading">
              Rules of the "Bulls and Cows" Game
            </h1>
            <p className="card-text">
              "Bulls and Cows" is a logical game for two players, where one
              player thinks of a three-digit number, and the other player must
              guess this number.
            </p>
            <p className="card-text">
              The player makes a guess, and the first player reveals the number
              of "bulls" (correct digits in correct positions) and "cows"
              (correct digits in incorrect positions).
            </p>
            <p className="card-text">
              The goal of the player is to guess the hidden number in the
              minimum number of moves.
            </p>
            <h2 className="sub-heading">Rules:</h2>
            <ul className="list-group rules-list">
              <li className="list-group-item">
                The hidden number consists of three digits.
              </li>
              <li className="list-group-item">
                Digits cannot be repeated in the hidden number.
              </li>
              <li className="list-group-item">
                The player makes a guess, and they are informed about bulls and
                cows.
              </li>
              <li className="list-group-item">
                The game continues until the player guesses the number.
              </li>
            </ul>
            <p className="card-text">
              Good luck in guessing the number and winning the "Bulls and Cows"
              game!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rules;
