import React from "react";
import { Product } from "../Products/Product";

export const GridView = ({ products }) => {
  return (
    <div className="gridview">
      <div className="gridview-product grid grid-cols-3 w-3/5 ml-60 gap-20 sm:grid-cols-1 sm:ml-32 sm:mt-3 md:ml-44 md:mt-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};
