import React from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../../Context/FilterContext";
export const Sort = () => {
  const { setGridView, setListView, filterProducts, sorting } =
    useFilterContext();
  return (
    <div className="sort grid grid-cols-3 w-3/4 mt-5 mb-5 ml-60 border-b-2">
      {/* 1st column */}
      <div className=" text-2xl">
        <button className="mr-4" onClick={setGridView}>
          <IoGrid />
        </button>
        <button onClick={setListView}>
          <FaThList />
        </button>
      </div>
      {/* 2nd column */}
      <div>{`${filterProducts.length}`} Products Available</div>
      {/* 3rd colmn */}
      <div>
        <form action="#">
          <label htmlFor="sort" className="bg-white p-1 rounded-lg">
            Sort by :
            <select id="sort" className=" outline-none" onClick={sorting}>
              <option value="lowest">lowest</option>
              <option value="#" disabled></option>
              <option value="highest">highest</option>
              <option value="#" disabled></option>
              <option value="a-z">a-z</option>
              <option value="#" disabled></option>
              <option value="z-a">z-a</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
};
