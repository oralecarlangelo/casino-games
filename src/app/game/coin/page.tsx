"use client";
import { useState } from "react";
import Coin from "./components/coin";
import { useCoinContext } from "./context/coin-context";

const CoinFlipPage = () => {
  const { triggerFlip, setTriggerFlip, coinResult, setCoinResult } =
    useCoinContext();

  const [animationComplete, setAnimationComplete] = useState(false);

  const flipCoin = () => {
    // Reset the animation completion state
    setAnimationComplete(false);

    // Generate a random coin result
    const result = Math.random() < 0.5 ? "heads" : "tails";
    setCoinResult(result);
    setTriggerFlip(true);
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 bg-gray-800 p-4 flex flex-col items-center">
        <button onClick={flipCoin} className="bg-orange-500 px-4 py-2">
          Flip Coin
        </button>
        {animationComplete && (
          <div className="mt-4">
            <span className="text-xl">
              {coinResult === "heads" ? "Heads" : "Tails"}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Coin onAnimationComplete={handleAnimationComplete} />
      </div>
    </div>
  );
};

export default CoinFlipPage;
