import React from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../../Context/FilterContext";

export const Sort = () => {
  const { setGridView, setListView, filterProducts, sorting } =
    useFilterContext();

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 text-base md:text-lg px-2 md:px-0">
      
      {/* View Toggle Buttons */}
      <div className="flex gap-4 text-2xl">
        <button onClick={setGridView} className="hover:text-primary transition">
          <IoGrid />
        </button>
        <button onClick={setListView} className="hover:text-primary transition">
          <FaThList />
        </button>
      </div>

      {/* Product Count */}
      <div className="text-gray-700">
        {`${filterProducts.length} Product${filterProducts.length !== 1 ? "s" : ""} Available`}
      </div>

      {/* Sorting Dropdown */}
      <div>
        <form>
          <label className="flex items-center gap-2 bg-white p-2 rounded-lg border shadow-sm">
            <span>Sort by:</span>
            <select
              id="sort"
              className="bg-transparent outline-none cursor-pointer"
              onChange={sorting}
            >
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
              <option value="a-z">A - Z</option>
              <option value="z-a">Z - A</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};
