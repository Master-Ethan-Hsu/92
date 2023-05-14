// import { useUIContext } from "../hook/useContext";
import { getProductData } from "../api/NTApi";
import { useState } from "react";

export const usePrdouctCate = async (type) => {
  const [productData, setProductData] = useState();
  let productArray = [];
  const productDataFromApi = await getProductData();
  console.log(productDataFromApi);
  productDataFromApi.forEach((product) => {
    if (product.cate === type) {
      productArray.push(product);
    }
  });
  try {
    if (productDataFromApi) setProductData(productData);
  } catch {
    throw new Error("can't get product data !");
  }

  console.log(productArray);
  return productArray;
};
