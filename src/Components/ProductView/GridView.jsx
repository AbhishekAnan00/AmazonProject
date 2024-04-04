import React from "react";
import { Product } from "../Products/Product";

export const GridView = ({ products }) => {
  return (
    <div className="gridview">
      <div className="gridview-product lapi:grid lapi:grid-cols-3 lapi:w-[800px] gap-20 mt-4 phone-sm:w-[180px] phone-sm:grid phone-sm:grid-cols-1">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};
