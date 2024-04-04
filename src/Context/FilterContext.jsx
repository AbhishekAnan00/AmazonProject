import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "lowest",
  filters: {
    text: "",
    category: "",
    company: "",
    color: "",
  },
};

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  // console.log(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to set grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //to set list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  //sorting
  const sorting = (event) => {
    const userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  //update filter
  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "SEARCH_FILTER", payload: { name, value } });
  };
  // to the clear filter
  const ResetFilter = () => {
    dispatch({ type: "RESET_FILTER" });
  };
  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sortingValue, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateFilterValue,
        ResetFilter,
        sorting,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//custom hook

export const useFilterContext = () => {
  return useContext(FilterContext);
};
