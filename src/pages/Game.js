import Header from "../components/Header";
import React, { useState, useEffect } from 'react';


import '../styles/Game.css'
import AttemptsList from '../components/AttemptsList';
import SettingsModal from '../components/SettingsModal';
const Game = () => { 
  
  const [numberLength, setNumberLength] = useState(3);
  const [randomNumber, setRandomNumber] = useState(genrateThreeDigitNumber);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [timer, setTimer] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function genrateThreeDigitNumber(){
   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
   let secret = '';
   for(let i = 0; i < numberLength; i++){
   const index = Math.floor(Math.random() * numbers.length);
   secret += numbers[index];
   numbers.splice(index, 1);
   }
  return secret;
  }
  
  function handleGuessChange(event) {
      setGuess(event.target.value);
    }

  function handleNumberLengthChange(event){
      setNumberLength(event.target.value)
    }
    
  function calculateBullsAndCows() {  
    let bulls = 0; 
    let cows = 0; 
    for(let i = 0; i < numberLength; i++){
      if (parseInt(guess[i]) === parseInt(randomNumber[i])) {
          bulls++;
      } else if (randomNumber.includes(guess[i])) {
          cows++;
      }
  }
return {bulls , cows};
}

   function guessSumbit(event){
    event.preventDefault();
    const {bulls, cows } = calculateBullsAndCows();
  const attemptResult = { guess, result: `Bulls: ${bulls}, Cows: ${cows}, Time: ${timer} seconds.`};
  setAttempts([...attempts, attemptResult]);
   if (bulls === numberLength){
  setFeedback(`Congrats, you win! Bulls: ${bulls}`);
  setTimer(0);
  }else{
  setFeedback(`Bulls: ${bulls} Cows: ${cows} Try again!`);  
}
}

useEffect(() => {
  let interval;
  if (guess !== '') {
    interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
  } else {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [guess]);

function openModal() {
  setModalIsOpen(true);
}

function closeModal() {
  setModalIsOpen(false);
}

function restartGame () {
  setRandomNumber(genrateThreeDigitNumber());
  setGuess('');
  setFeedback('');
  setAttempts([]);
  setTimer(0);
}

console.log(randomNumber);

return (
  <>
  <Header />
<div className='game'>

  <form onSubmit={guessSumbit}>
   <input 
   type = "text"
   value = {guess}
   onChange={handleGuessChange}
   maxLength={numberLength}
   minLength={numberLength}
   required
   />
   
   <button type = "sumbit">Try to guess</button>
   <button onClick={restartGame}>Restart</button>
   <button onClick={openModal}>Settings</button>
    <SettingsModal isOpen={modalIsOpen} closeModal={closeModal} />
   <p>You play <strong>{timer} </strong>seconds</p>
   <p>your number length:<strong>{numberLength}</strong></p>
 
   </form>

   <form> 
   <input 
   type = "text"
   onChange={handleNumberLengthChange}
   maxLength= "1"
   />
 
  </form>

   <p>{feedback}</p>
   <AttemptsList attempts={attempts} />
  
  </div>
  </>);
}
export default Game;
