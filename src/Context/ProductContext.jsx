// import {
//   createContext,
//   useContext,
//   useReducer,
//   useEffect,
//   useState,
// } from "react";
// import reducer from "../Reducer/ProductReducer";
// import axios from "axios";
// import { fireDB } from "../Firebase/FirebaseConfig";
// import { getDocs, collection } from "firebase/firestore";

// const AppContext = createContext();

// const API = "https://api.pujakaitem.com/api/products";

// const initialState = {
//   isLoading: false,
//   isError: false,
//   products: [],
//   featureProducts: [],
//   isSingleLoading: false,
//   SingleProduct: {},
// };

// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const getProducts = async (url) => {
//     dispatch({ type: "SET_LOADING" });
//     try {
//       const res = await axios.get(url);
//       //  console.log(res);
//       const products = await res.data;
//       // console.log(products);
//       dispatch({ type: "SET_API_DATA", payload: products });
//     } catch (error) {
//       dispatch({ type: "API_ERROR" });
//     }
//   };

//   //for single product
//   const getSingleProduct = async (url) => {
//     dispatch({ type: "SET_SINGLE_LOADING" });
//     try {
//       const res = await axios.get(url);
//       const SingleProduct = await res.data;
//       dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
//     } catch (error) {
//       dispatch({ type: "SET_SINGLE_ERROR" });
//     }
//   };

//   useEffect(() => {
//     getProducts(API);
//   }, []);

//   //order
//   const [order, setOrder] = useState([]);

//   const getOrderData = async () => {
//     try {
//       const result = await getDocs(collection(fireDB, "order"));
//       // console.log(result);
//       const ordersArray = [];
//       result.forEach((doc) => {
//         ordersArray.push(doc.data());
//       });
//       setOrder(ordersArray);
//       // console.log(ordersArray)
//     } catch (error) {
//       alert("order not placed");
//     }
//   };

//   useEffect(() => {
//     getOrderData();
//   }, []);

//   return (
//     <AppContext.Provider value={{ ...state, getSingleProduct, order }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // custom hook
// const useProductContext = () => {
//   return useContext(AppContext);
// };
// export { AppProvider, AppContext, useProductContext };



import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import reducer from "../Reducer/ProductReducer";
import axios from "axios";
import { fireDB } from "../Firebase/FirebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  SingleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // For single product
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const SingleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: SingleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  // Order management
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push({ id: doc.id, ...doc.data() });
      });
      setOrder(ordersArray);
      // console.log(ordersArray)
    } catch (error) {
      alert("Order not placed");
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct, order }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
