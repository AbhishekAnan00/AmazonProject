import React from "react";
import { Link } from "react-router-dom";
import { FormatPrice } from "../FormatPrice/FormatPrice";

export const Product = (curElem) => {
  const { id, image, name, price, category } = curElem;
  return (
    <div className="product">
      <Link to={`/singleproduct/${id}`}>
        <div className="card transition-transform transform hover:scale-110 cursor-pointer ">
          <figure>
            <img src={image} alt="" />
            <figcaption>{category}</figcaption>
          </figure>
          <div className="card-data">
            <div className="card-flex flex justify-between">
              <h3>{name}</h3>
              {/*intl-fotmat-constructur provide by js */}
              <p>
                <FormatPrice price={price} />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
