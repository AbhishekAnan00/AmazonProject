const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, amount, color, product } = action.payload;
    // console.log(product);
    let cartProduct;
    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  if (action.type === "CLEAR_CART"){
    return {
       ...state,
       cart : []
    }
  }
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;

        if (decAmount <= 0) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return {
      ...state,
      cart: updatedProduct,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    let updateCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updateCart,
    };
  }
  if (action.type === "CART_COUNT") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      totalItem: updatedItemVal,
    };
  }
  if (action.type === "TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { amount, price } = curElem;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      totalPrice: total_price,
    };
  }
  return state;
};
export default CartReducer;
