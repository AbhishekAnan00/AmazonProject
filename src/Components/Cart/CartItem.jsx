import React from "react";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartToggleAmount } from "./CartToggleAmount";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../Context/CartContext";

export const CartItem = ({ id, name, image, price, amount, color }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <>
      <div className="cartitem sm:gap-4 sm:mb-6 sm:flex sm:w-full sm:border sm:bg-white sm:h-40 md:h-40 md:grid md:grid-cols-3">
        <figure className="cartitem-img">
          <img src={image} alt={id} className="sm:w-42 md:w-52" />
        </figure>
        <div className="cartitem-data">
          <p className="font-semibold sm:mb-2">{name}</p>
          <p>color:</p>
          <button
            className=" w-5 rounded-full h-5 sm:mb-2"
            style={{
              backgroundColor: color,
              color: color,
            }}
          ></button>

          <p>
            <FormatPrice price={price} />
          </p>

          <CartToggleAmount
            amount={amount}
            setDecrease={() => setDecrement(id)}
            setIncrease={() => setIncrement(id)}
          />
        </div>
        <div className="cartitem-delete">
          <MdDelete className="sm:text-2xl" onClick={() => removeItem(id)} />
        </div>
      </div>
    </>
  );
};
