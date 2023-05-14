import { useState } from "react";
import Box from "@mui/material/Box";
import Product from "./Product";
import { getPrdouctCate } from "./../hook/usePrdouctCate";

export const Dessert = () => {
  const [dessertData, setDessertData] = useState();
  const dessert = getPrdouctCate("dessert");
  dessert.then((data) => {
    console.log(data);
    setDessertData(data);
  });

  return (
    <Box>{dessertData ? <Product productData={dessertData} /> : null}</Box>
  );
};
