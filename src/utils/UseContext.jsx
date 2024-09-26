import React, { createContext, useState } from "react";

export const myContext = createContext();
export const UseContext = ({ children }) => {
  const [myName, setMyName] = useState("i am a boy");

  return (
    <myContext.Provider value={{ setMyName, myName }}>
      {children}
    </myContext.Provider>
  );
};
