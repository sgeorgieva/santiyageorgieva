import React, { createContext } from "react";

export const LocalContext = createContext(false);

export const LocalProvider = ({ children }: React.PropsWithChildren) => {
  const setItem = (item: boolean) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("isOpen", JSON.stringify(item));
    }
  };
  
  const getItem = (item: boolean) => {
    if (typeof window !== "undefined") {
      return JSON.parse(window.localStorage.getItem("isOpen") || false);
    }
  };

  return (
    <LocalContext.Provider value={[setItem, getItem]}>
      {children}
    </LocalContext.Provider>
  );
};