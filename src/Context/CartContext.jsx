import { useContext } from "react";
import { useReducer, useEffect } from "react";
import { createContext } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("store");
  // if ((localCartData = [])) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }
  const parseData = JSON.parse(localCartData);
  if (!Array.isArray(parseData)) return [];
  return parseData;
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  totalItem: "",
  totalPrice: "",
  shippingFees: 50000,
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, color, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  //increment & decrement
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  //clear cart button
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  //store item in localstroage
  useEffect(() => {
    dispatch({ type: "CART_COUNT" });
    dispatch({ type: "TOTAL_PRICE" });
    localStorage.setItem("store", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        setIncrement,
        setDecrement,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//custom hook
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartContextProvider, useCartContext };
