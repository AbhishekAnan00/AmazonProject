import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { useFilterContext } from "../../Context/FilterContext";

export const FilterSection = () => {
  const {
    updateFilterValue,
    filters: { text },
    allProducts,
    color,
    ResetFilter,
  } = useFilterContext();
  //get unique data
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return (newVal = [...new Set(newVal)]);
  };

  //need unique data
  const getCategoryData = getUniqueData(allProducts, "category");
  const getCompanyData = getUniqueData(allProducts, "company");
  const getColorsData = getUniqueData(allProducts, "colors");
  return (
    <>
      <div className="filter-section mt-6 max-w-20">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="Search Products"
              className="search-product border-none outline-none p-[5px] lapi:w-60 rounded-lg cursor-pointer phone-sm:w-40"
            />
          </form>
        </div>

        <div className="category lapi:text-xl phone-sm:text-md">
          <p className="mb-3 mt-4 text-black-500 font-semibold">Category</p>
          {getCategoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
                className="flex flex-col mb-1 hover:text-orange-500"
              >
                {curElem}
              </button>
            );
          })}
        </div>
        <div className="company lapi:text-xl phone-sm:text-md">
          <p className="mb-3 mt-3 text-black-500 font-semibold">Company</p>
          {getCompanyData.map((curElem, index) => {
            return (
              <div className="flex gap-4">
                <input
                  type="checkbox"
                  key={index}
                  name="company"
                  value={curElem}
                  onClick={updateFilterValue}
                />
                <span>{curElem}</span>
              </div>
            );
          })}
        </div>
        <div className="color w-80 lapi:text-xl phone-sm:text-md">
          <p className="mb-4 mt-3 text-black-500 font-semibold">Colors</p>
          {getColorsData.map((curColor, index) => {
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                onClick={updateFilterValue}
                className="lapi:w-6 lapi:h-6 rounded-full lapi:mr-2 phone-sm:w-4 phone-sm:h-4 phone-sm:mr-1"
              >
                {color === curColor ? (
                  <IoIosCheckmark className="text-white" />
                ) : null}
              </button>
            );
          })}
        </div>

        <button
          onClick={ResetFilter}
          className="border bg-primary text-black  hover:opacity-75 transition-opacity rounded-lg font-semibold p-[4px] lapi:w-32 mt-5 cursor-pointer phone-sm:w-24"
        >
          Reset
        </button>
      </div>
    </>
  );
};
