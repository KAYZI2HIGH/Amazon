import React, { createContext, useState } from "react";
import products from "../data.js";

export const myContext = createContext();
export const UseContext = ({ children }) => {
  const [productData, setProductData] = useState(products);

  return (
    <myContext.Provider value={{ productData, setProductData }}>
      {children}
    </myContext.Provider>
  );
};
