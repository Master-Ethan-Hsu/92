import { createContext, useContext } from "react";
import { useProdcutData } from "./useProdcutData";

export const UIContext = createContext();

export const useUIContext = () => {
  return useContext(UIContext);
};

export const UIProvider = ({ children }) => {
  const productDataContext = useProdcutData();

  const value = {
    productDataContext,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
