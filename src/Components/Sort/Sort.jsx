import React from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../../Context/FilterContext";
export const Sort = () => {
  const { setGridView, setListView, filterProducts, sorting } =
    useFilterContext();
  return (
    <div
      className="sm:ml-32 sm:grid 
    sm:grid-cols-2 sm:text-[10px] sm:mt-5"
    >
      {/* 1st column */}
      <div className=" text-2xl md:absolute md:left-64">
        <button className="md:mt-4 sm:mr-2" onClick={setGridView}>
          <IoGrid className="grid-icon sm:text-[20px] md:text-[26px]" />
        </button>
        <button onClick={setListView}>
          <FaThList className="list-icon sm:text-[20px] md:text-[26px]" />
        </button>
      </div>
      {/* 2nd column */}
      <div className="sort-product-count hidden">
        {`${filterProducts.length}`} Products Available
      </div>
      {/* 3rd colmn */}
      <div>
        <form
          action="#"
          className=" md:relative md:top-[20px] md:ml-80 md:text-[12px] md:w-32 lg:relative lg:ml-96 sm:relative sm:mt-3  sm:w-40  xl:relative xl:left-[180px] 2xl:left-[200px]"
        >
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
