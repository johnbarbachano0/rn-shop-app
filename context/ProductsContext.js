import React, { createContext, useReducer } from "react";
import PRODUCTS from "../constants/dummy-data";
import { productReducer } from "./ProductReducer";

export const ProductsStore = createContext(null);

const intialState = {
  allProducts: PRODUCTS,
  cartProducts: [{ id: "p1", qty: 2 }],
  orderedProducts: [],
};

function ProductsContext(props) {
  const [products, dispatchProduct] = useReducer(productReducer, intialState);

  return (
    <ProductsStore.Provider value={{ products, dispatchProduct }}>
      {props.children}
    </ProductsStore.Provider>
  );
}

export default ProductsContext;
