"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface DiceContextProps {
  triggerShuffle: boolean;
  setTriggerShuffle: (trigger: boolean) => void;
  diceResult: number;
  setDiceResult: (result: number) => void;
}

const DiceContext = createContext<DiceContextProps | undefined>(undefined);

export const useDiceContext = () => {
  const context = useContext(DiceContext);
  if (!context) {
    throw new Error("useDiceContext must be used within a DiceProvider");
  }
  return context;
};

export const DiceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [triggerShuffle, setTriggerShuffle] = useState(false);
  const [diceResult, setDiceResult] = useState(1); // Default to 1

  return (
    <DiceContext.Provider
      value={{
        triggerShuffle,
        setTriggerShuffle,
        diceResult,
        setDiceResult,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};
