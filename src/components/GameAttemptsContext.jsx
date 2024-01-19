import { createContext, useContext, useState } from "react";

const GameAttemptsContext = createContext();

export const useGameAttempts = () => {
  return useContext(GameAttemptsContext);
};

export const GameAttemptsProvider = ({ children }) => {
  const [gameAttempts, setGameAttempts] = useState([]);

  const addGameAttempt = (attempt) => {
    setGameAttempts((prevAttempts) => [...prevAttempts, attempt]);
  };

  return (
    <GameAttemptsContext.Provider value={{ gameAttempts, addGameAttempt }}>
      {children}
    </GameAttemptsContext.Provider>
  );
};
