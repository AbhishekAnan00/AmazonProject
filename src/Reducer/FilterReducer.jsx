const FilterReducer = (state,action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload], 
      }; 
      case "SET_GRID_VIEW":
        return {
          ...state,
          gridView: true,
        };
  
      case "SET_LIST_VIEW":
        return {
          ...state,
          gridView: false,
        };
        case "GET_SORT_VALUE":
          return {
            ...state,
            sortingValue: action.payload,
          };
        case "SORTING_PRODUCTS":
          let newSortValue;
          const { filterProducts } = state;
          let tempSortProduct = [...filterProducts];
          const sortingProducts = (a, b) => {
            if (state.sortingValue === "lowest") {
              return a.price - b.price;
            }
            if (state.sortingValue === "highest") {
              return b.price - a.price;
            }
            if (state.sortingValue === "a-z") {
              return a.name.localeCompare(b.name);
            }
            if (state.sortingValue === "z-a") {
              return b.name.localeCompare(a.name);
            }
          };
          newSortValue = tempSortProduct.sort(sortingProducts);
          return {
            ...state,
            filterProducts: newSortValue,
          };
    
        case "SEARCH_FILTER":
          const { name, value } = action.payload;
          return {
            ...state,
            filters: {
              ...state.filters,
              [name]: value,
            },
          };
          case "FILTER_PRODUCTS":
            let { allProducts } = state;
            let tempFilterProduct = [...allProducts];
            const { text , category , company , color} = state.filters;
            if (text) {
              tempFilterProduct =  tempFilterProduct.filter((curElem) => {
                return curElem.name.toLowerCase().includes(text);
              });
            }
            if (category ){
              tempFilterProduct =  tempFilterProduct.filter((curElem) => {
                return curElem.category === category
              })
            }
            if (company ){
              tempFilterProduct =  tempFilterProduct.filter((curElem) => {
                return curElem.company.toLowerCase() === company.toLowerCase()
              })
            }
            if (color){
              tempFilterProduct =  tempFilterProduct.filter((curElem) => {
                return curElem.colors.includes(color)
              })
            }
            //price input section not declare
           
            return {
              ...state,
              filterProducts: tempFilterProduct,
            };
            case "RESET_FILTER" :
              return {
                ...state,
                filters: {
                  ...state.filters,
                  text: "",
                  category: "",
                  company: "",
                  color: "",
                },
              }
        default:
      return state;
  }
}
export default FilterReducer