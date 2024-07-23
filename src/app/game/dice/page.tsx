"use client";
import { useGameContext } from "../context/game-context";
import Dice from "./components/dice";
import { useDiceContext } from "./context/dice-context";

const GamePage = () => {
  const {
    betAmount,
    setBetAmount,

    selectedNumber,
    setSelectedNumber,
    win,
    setWin,
  } = useGameContext();

  const {
    diceResult,

    setTriggerShuffle,
    setDiceResult,
  } = useDiceContext();

  const rollDice = () => {
    // Generate a random dice result between 1 and 6
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
    setTriggerShuffle(true);

    // Check if the user wins
  };

  const increaseBet = () => {
    setBetAmount(betAmount + 1);
  };

  const decreaseBet = () => {
    setBetAmount(betAmount - 1);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNumber(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="w-64 bg-gray-800 p-4 flex flex-col items-center">
        <div className="flex items-center mb-4">
          <button onClick={decreaseBet} className="bg-gray-600 px-4 py-2">
            -
          </button>
          <span className="mx-4 text-xl">{betAmount.toFixed(2)}</span>
          <button onClick={increaseBet} className="bg-gray-600 px-4 py-2">
            +
          </button>
        </div>
        <div className="flex flex-col items-center mb-4">
          <label htmlFor="number-select" className="mb-2">
            Select a number:
          </label>
          <select
            id="number-select"
            value={selectedNumber}
            onChange={handleNumberChange}
            className="bg-gray-600 p-2"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button onClick={rollDice} className="bg-orange-500 px-4 py-2">
          Roll Dice
        </button>
        <div className="mt-4">
          <span className="text-xl">
            {selectedNumber === diceResult ? "You Win" : "You Lose"}
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Dice />
      </div>
    </div>
  );
};

export default GamePage;
