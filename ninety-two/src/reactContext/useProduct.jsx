import { createContext } from "react";
import { useState } from "react";

export const ProductContext = createContext();

export const useProduct = (props) => {
  const [showComponent, setShowComponent] = useState(false);
  const contextData = {
    showComponent,
    setShowComponent,
  };

  return (
    <ProductContext.Provider value={useProduct.contextData}>
      {props.children}
    </ProductContext.Provider>
  );
};
