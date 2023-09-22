import { createContext, useContext, useEffect, useReducer } from "react";
// import axios from "axios";
import reducer from "../reducer/productReducer";
const products = require('../api/products.json')
console.log(`Products: ${products}`);
const AppContext = createContext();

// const API = "https://b637-180-178-143-112.ngrok-free.app/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      // const res = await axios.get(url);
      // const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
      console.log(products);
      console.log("products");
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      // const res = await axios.get(url);
      // const singleProduct = await res.data;
      const singleProductData = require(`../api/singleProducts/${url}.json`)
      console.log(`singleProduct: ${singleProductData}`);
      const singleProduct = singleProductData;
      console.log('====================================');
      console.log(`Single Product: ${singleProduct}`);
      console.log('====================================');
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
      // console.log(singleProductData)
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
