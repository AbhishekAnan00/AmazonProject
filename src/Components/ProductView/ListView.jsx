import React from "react";
import { Link } from "react-router-dom";

export const ListView = ({ products }) => {
  return (
    <div className="listview mt-4 lapi:w-[800px] phone-sm:w-[180px]">
      {products.map((curElem) => {
        const { id, name, price, image, description } = curElem;
        return (
          <div
            key={curElem.id}
            className="border border-black-500 items-center flex flex-row mb-6"
          >
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="listview-container p-5 text-wrap text-left">
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
