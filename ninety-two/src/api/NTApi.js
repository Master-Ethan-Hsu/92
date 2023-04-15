import axios from "axios";

const getProductApiAddress =
  "https://script.googleusercontent.com/macros/echo?user_content_key=-MGz5QP3g1j1mZbGdYxUGTwIyz62ijHs7APeVprdyhXjASxTk-Rkimlb5ZjeQfoonrsdFaGz8-Jz9LbRQT4X-xb7Gg43g52Wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBOJKfjyjEam9nlwsRJCdeamxvk6uLyt5XgS__uFleGhi16_cAx8lgWm9f_mK9o4sX7ePFZwXPosFQCDxLwsyIsNTKgKBpj-Qdz9Jw9Md8uu&lib=MhqB0CZ27ywKfImGuw0cxc_tgizIjeIfZ";

export const getProductData = async () => {
  try {
    const productData = await axios.get(getProductApiAddress);
    return productData.data;
  } catch (error) {
    console.log("error", error);
  }
};
