import { useState } from "react";

export const useProdcutData = () => {
  const [productData, setProductData] = useState(false);

  const setExportShowComponent = (props) => {
    setProductData(props);
  };

  const buildUseExportState = () => {
    return {
      productData,
      setExportShowComponent,
    };
  };

  return buildUseExportState();
};
