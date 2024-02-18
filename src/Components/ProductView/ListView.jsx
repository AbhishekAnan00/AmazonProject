import React from "react";
import { Link } from "react-router-dom";

export const ListView = ({ products }) => {
  return (
    <div className="listview">
      {products.map((curElem) => {
        const { id, name, price, image, description } = curElem;
        return (
          <div
            key={curElem.id}
            className="grid grid-cols-2 w-3/4 gap-20 mb-10 ml-60  border border-black-500 items-center"
          >
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="container p-5 text-wrap text-left">
              <p className="mb-5 font-semibold">
                {description.slice(0, 90)}...
              </p>
              <p className="mb-5">{name}</p>
              <p className="mb-5 font-semibold">Price:{price}</p>
              <Link to={`/singleproduct/${id}`}>
              <button className="mb-5 font-semibold border bg-primary text-black p-[5px] hover:opacity-75 transition-opacity rounded-lg cursor-pointer">
                  read more
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
