import React from "react";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartToggleAmount } from "./CartToggleAmount";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../Context/CartContext";

export const CartItem = ({ id, name, image, price, amount, color }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <div className="flex flex-wrap items-center justify-between gap-8 mt-6 p-4 border-b border-gray-200">

      <figure className="w-32 h-32 phone-sm:w-16 phone-sm:h-16 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </figure>

      <div className="flex flex-col text-lg phone-sm:text-sm gap-2 flex-1 min-w-[180px]">
        <p className="font-semibold">{name}</p>
        <div className="flex items-center gap-2">
          <span>Color:</span>
          <span
            className="w-5 h-5 rounded-full inline-block border border-gray-300"
            style={{ backgroundColor: color }}
            aria-label={`Color: ${color}`}
          ></span>
        </div>
        <p>
          <FormatPrice price={price} />
        </p>
        <CartToggleAmount
          amount={amount}
          setDecrease={() => setDecrement(id)}
          setIncrease={() => setIncrement(id)}
        />
      </div>

 
      <button
        onClick={() => removeItem(id)}
        className="text-red-600 hover:text-red-800 text-2xl transition"
        aria-label={`Remove ${name} from cart`}
      >
        <MdDelete />
      </button>
    </div>
  );
};
