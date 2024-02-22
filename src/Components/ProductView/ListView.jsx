import React from "react";
import { Link } from "react-router-dom";

export const ListView = ({ products }) => {
  return (
    <div className="listview lg:mt-10 lg:mr-20 md:mt-12">
      {products.map((curElem) => {
        const { id, name, price, image, description } = curElem;
        return (
          <div
            key={curElem.id}
            className="md:ml-44 md:mb-5 sm:w-[260px] sm:ml-24 sm:mt-5 border border-black-500 items-center md:flex md:flex-col md:w-80 lg:flex lg:flex-row lg:w-[500px] xl:w-[800px] 2xl:w-[800px]"
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
