import React from "react";
import { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { CartToggleAmount } from "./CartToggleAmount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div className="colors">
      <p>
        colors :
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className="rounded-full w-5 h-5 ml-1 mt-2"
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? (
                <IoIosCheckmark className="text-white" />
              ) : null}
            </button>
          );
        })}
      </p>
      {/* add to cart */}
      <CartToggleAmount
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <div className="flex flex-col">
        <Link to="/cart">
          <button
            className="border border-yellow-400 bg-primary text-black  hover:opacity-75 transition-opacity rounded-2xl font-semibold p-[4px] w-32 cursor-pointer mt-4"
            onClick={() => addToCart(id, amount, color, product)}
          >
            Add To Cart
          </button>
        </Link>
        <Link to="/cart">
          <button className="border border-orange-400 bg-orange-500 text-black  hover:opacity-75 transition-opacity rounded-2xl font-semibold p-[4px] w-32 mt-2 cursor-pointer">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};
