"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface CoinContextProps {
  triggerFlip: boolean;
  setTriggerFlip: (trigger: boolean) => void;
  coinResult: "heads" | "tails";
  setCoinResult: (result: "heads" | "tails") => void;
}

const CoinContext = createContext<CoinContextProps | undefined>(undefined);

export const useCoinContext = () => {
  const context = useContext(CoinContext);
  if (!context) {
    throw new Error("useCoinContext must be used within a CoinProvider");
  }
  return context;
};

export const CoinProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [triggerFlip, setTriggerFlip] = useState(false);
  const [coinResult, setCoinResult] = useState<"heads" | "tails">("heads");

  return (
    <CoinContext.Provider
      value={{
        triggerFlip,
        setTriggerFlip,
        coinResult,
        setCoinResult,
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};
