import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { CartToggleAmount } from "./CartToggleAmount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors = [], stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const setIncrease = () => {
    setAmount((prev) => (prev < stock ? prev + 1 : stock));
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-semibold">Colors:</span>
        {colors.map((curColor, index) => (
          <button
            key={index}
            style={{ backgroundColor: curColor }}
            className={`w-6 h-6 rounded-full flex items-center justify-center border-2 ${
              color === curColor ? "border-black" : "border-transparent"
            }`}
            onClick={() => setColor(curColor)}
            aria-label={`Select color ${curColor}`}
          >
            {color === curColor && <IoIosCheckmark className="text-white text-sm" />}
          </button>
        ))}
      </div>

      <CartToggleAmount
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <Link to="/cart">
          <button
            onClick={() => addToCart(id, amount, color, product)}
            className="bg-primary text-black font-semibold px-4 py-2 rounded-xl border border-yellow-400 hover:opacity-80 transition"
          >
            Add To Cart
          </button>
        </Link>
        <Link to="/cart">
          <button className="bg-orange-500 text-black font-semibold px-4 py-2 rounded-xl border border-orange-400 hover:opacity-80 transition">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};
