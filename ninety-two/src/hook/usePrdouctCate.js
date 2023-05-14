// import { useUIContext } from "../hook/useContext";
import { getProductData } from "../api/NTApi";

export const getPrdouctCate = async (type) => {
  let productArray = [];
  const productDataFromApi = await getProductData();
  try {
    if (productDataFromApi) {
      productDataFromApi.forEach((product) => {
        if (product.cate === type) {
          productArray.push(product);
        }
      });
    }
  } catch {
    throw new Error("can't get product data !");
  }

  return productArray;
};
