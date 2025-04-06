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

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => curElem[property]);
    if (property === "colors") {
      newVal = newVal.flat();
    }
    return [...new Set(newVal)];
  };

  const getCategoryData = getUniqueData(allProducts, "category");
  const getCompanyData = getUniqueData(allProducts, "company");
  const getColorsData = getUniqueData(allProducts, "colors");

  return (
    <div className="filter-section p-4 max-w-xs w-full">
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="Search Products"
            className="w-full border border-gray-300 outline-none px-3 py-2 rounded-md text-sm"
          />
        </form>
      </div>

      <div className="mt-6">
        <p className="mb-3 font-semibold text-gray-800 text-base">Category</p>
        {getCategoryData.map((curElem, index) => (
          <button
            key={index}
            type="button"
            name="category"
            value={curElem}
            onClick={updateFilterValue}
            className="block mb-2 text-sm text-gray-600 hover:text-orange-500"
          >
            {curElem}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-3 font-semibold text-gray-800 text-base">Company</p>
        {getCompanyData.map((curElem, index) => (
          <label key={index} className="flex items-center gap-2 mb-2 text-sm">
            <input
              type="checkbox"
              name="company"
              value={curElem}
              onClick={updateFilterValue}
            />
            <span>{curElem}</span>
          </label>
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-3 font-semibold text-gray-800 text-base">Colors</p>
        <div className="flex flex-wrap gap-2">
          {getColorsData.map((curColor, index) => (
            <button
              key={index}
              type="button"
              value={curColor}
              name="color"
              style={{ backgroundColor: curColor }}
              onClick={updateFilterValue}
              className="w-6 h-6 rounded-full flex items-center justify-center"
            >
              {color === curColor ? (
                <IoIosCheckmark className="text-white text-lg" />
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={ResetFilter}
        className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm font-medium"
      >
        Reset
      </button>
    </div>
  );
};
