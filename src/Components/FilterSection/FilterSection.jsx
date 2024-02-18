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
      <div className="filter-section mt-10 max-w-20 pl-4">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updateFilterValue}
              placeholder="Search Products"
              className="border-none outline-none p-[5px] w-60 rounded-lg cursor-pointer"
            />
          </form>
        </div>

        <div className="category">
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
        <div className="company">
          <p className="mb-3 mt-3 text-black-500 font-semibold">Company</p>
          {getCompanyData.map((curElem, index) => {
            return (
              <div className="flex">
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
        <div className="color w-60">
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
                className="w-4 h-4 rounded-full mr-1"
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
          className="border bg-primary text-black  hover:opacity-75 transition-opacity rounded-lg font-semibold p-[4px] w-32 mt-5 cursor-pointer"
        >
          Reset
        </button>
      </div>
    </>
  );
};
