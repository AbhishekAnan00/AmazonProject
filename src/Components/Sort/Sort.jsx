import React from "react";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import { useFilterContext } from "../../Context/FilterContext";
export const Sort = () => {
  const { setGridView, setListView, filterProducts, sorting } =
    useFilterContext();
  return (
    <div
      className="flex justify-between text-[20px] mt-6"
    >
      {/* 1st column */}
      <div className="text-3xl flex gap-8">
        <div>
        <button onClick={setGridView}>
          <IoGrid className="grid-ico phone-sm:hidden lapi:block" />
        </button>
        </div>
        <div>
        <button onClick={setListView}>
          <FaThList className="list-icon phone-sm:hidden lapi:block" />
        </button>
        </div>
      </div>
      {/* 2nd column */}
      <div className="sort-product-count phone-sm:hidden lapi:block">
        {`${filterProducts.length}`} Products Available
      </div>
      {/* 3rd colmn */}
      <div>
        <form
          action="#"
          className="text-[16px] flex w-40"
        >
          <label htmlFor="sort" className="bg-white p-1 rounded-lg flex">
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
