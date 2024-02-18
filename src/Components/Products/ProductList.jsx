import React from "react";
import { GridView } from "../ProductView/GridView";
import { ListView } from "../ProductView/ListView";
import { useFilterContext } from "../../Context/FilterContext";

export const ProductList = () => {
  const { filterProducts, gridView } = useFilterContext();

  if (gridView === true) {
    return <GridView products={filterProducts} />;
  }
  if (gridView === false) {
    return <ListView products={filterProducts} />;
  }
};
export default ProductList;
