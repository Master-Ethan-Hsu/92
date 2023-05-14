import { createContext, useContext } from "react";
import { useProdcutData } from "./useProdcutData";
import { useIsDataUpdate } from "./useIsDataUpdate";
export const UIContext = createContext();

export const useUIContext = () => {
  return useContext(UIContext);
};

export const UIProvider = ({ children }) => {
  const productDataContext = useProdcutData();
  const isDataUpdateContext = useIsDataUpdate();

  const value = {
    productDataContext,
    isDataUpdateContext,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
