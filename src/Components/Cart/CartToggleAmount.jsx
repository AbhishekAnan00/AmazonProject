import React from "react";

export const CartToggleAmount = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="flex items-center gap-6 text-lg font-medium">
      <button
        onClick={setDecrease}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-xl hover:bg-gray-100 transition"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="min-w-[24px] text-center">{amount}</span>
      <button
        onClick={setIncrease}
        className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-xl hover:bg-gray-100 transition"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

