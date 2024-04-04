import React from "react";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartToggleAmount } from "./CartToggleAmount";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../Context/CartContext";

export const CartItem = ({ id, name, image, price, amount, color }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <>
      <div className="cartitem flex gap-60 mt-8 phone-sm:flex phone-sm:mt-5 phone-sm:gap-6 phone-md:gap-8 phone-lg:gap-10 phone-xl:16 lapi:gap-40 lapi:mt-8 lapi:flex">
        <figure className="cartitem-img">
          <img src={image} alt={id} className="h-60 phone-sm:h-20 lapi:h-60"/>
        </figure>
        <div className="cartitem-data text-2xl phone-sm:text-sm lapi:text-2xl">
          <p className="font-semibold">{name}</p>
          <p className="mt-4 phone-sm:mt-1">color:</p>
          <button
            className="w-5 rounded-full h-5 mt-4 phone-sm:mt-1 lapi:mt-4"
            style={{
              backgroundColor: color,
              color: color,
            }}
          ></button>

          <p className="mt-4 phone-sm:mt-1 lapi:mt-4">
            <FormatPrice price={price} />
          </p>
          <p className="mt-4 phone-sm:mt-1 lapi:mt-4">
          <CartToggleAmount
            amount={amount}
            setDecrease={() => setDecrement(id)}
            setIncrease={() => setIncrement(id)}
          />
          </p>
        </div>
        <div className="cartitem-delete">
          <MdDelete className="text-2xl" onClick={() => removeItem(id)} />
        </div>
      </div>
    </>
  );
};
