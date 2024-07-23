"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface GameContextProps {
  betAmount: number;
  setBetAmount: (amount: number) => void;
  selectedNumber: number;
  setSelectedNumber: (number: number) => void;
  win: boolean;
  setWin: (win: boolean) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};

export const GameProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [betAmount, setBetAmount] = useState(5.0);
  const [selectedNumber, setSelectedNumber] = useState(1); // Default to 1
  const [win, setWin] = useState(false);

  return (
    <GameContext.Provider
      value={{
        betAmount,
        setBetAmount,
        selectedNumber,
        setSelectedNumber,
        win,
        setWin,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
