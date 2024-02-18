import React from "react";
import { FormatPrice } from "../FormatPrice/FormatPrice";
import { CartToggleAmount } from "./CartToggleAmount";
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../Context/CartContext";

export const CartItem = ({ id, name, image, price, amount, color }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <>
      <div className="cartitem grid grid-cols-3 w-[900px] ml-10 mt-5 border bg-white">
        <figure>
          <img src={image} alt={id} className=" h-40 " />
        </figure>
        <div className="mt-5 ml-10 ">
          <p className="font-semibold">{name}</p>
          <p>color:</p>
          <button
            className=" w-5 rounded-full h-5 "
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
        <div>
          <MdDelete
            className="text-2xl mt-2 relative -right-[200px] "
            onClick={() => removeItem(id)}
          />
        </div>
      </div>
    </>
  );
};
