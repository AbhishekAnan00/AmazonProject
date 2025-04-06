import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "../FormatPrice/FormatPrice";

export const ListView = ({ products }) => {
  return (
    <div className="mt-6 px-4 md:px-8 space-y-6">
      {products.map((product) => {
        const { id, name, price, image, description } = product;
        return (
          <div
            key={id}
            className="flex flex-col md:flex-row items-start gap-6 border border-gray-300 p-4 rounded-lg shadow-sm"
          >
            <figure className="w-full md:w-1/3">
              <img src={image} alt={name} className="w-full h-auto object-cover rounded-md" />
            </figure>

            <div className="flex-1 space-y-3">
              <p className="text-gray-800">{description.slice(0, 90)}...</p>
              <h2 className="text-lg font-semibold">{name}</h2>
              <p className="text-md font-bold">
                Price: <FormatPrice price={price} />
              </p>
              <Link to={`/singleproduct/${id}`}>
                <button className="mt-2 bg-primary text-black px-4 py-2 rounded hover:opacity-80 transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
