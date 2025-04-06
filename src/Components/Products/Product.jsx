import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "../FormatPrice/FormatPrice";

export const Product = ({ id, image, name, price, category }) => {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm mx-auto p-2">
      <Link to={`/singleproduct/${id}`}>
        <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 transform hover:scale-105">
          <figure className="relative w-full h-64 bg-gray-100">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-2 left-2 bg-white text-gray-700 text-sm px-2 py-1 rounded">
              {category}
            </figcaption>
          </figure>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base text-gray-800 truncate">{name}</h3>
              <p className="text-primary font-medium text-sm">
                <FormatPrice price={price} />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
