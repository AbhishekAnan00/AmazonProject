import React from "react";
import { Product } from "../Products/Product";

export const GridView = ({ products }) => {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((curElem) => (
          <Product key={curElem.id} {...curElem} />
        ))}
      </div>
    </div>
  );
};
