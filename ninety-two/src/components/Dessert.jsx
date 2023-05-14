import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Product from "./Product";
import { usePrdouctCate } from "./../hook/usePrdouctCate";

export const Dessert = () => {
  const [dessertData, setDessertData] = useState();
  const dessert = usePrdouctCate("coffee");

  useEffect(() => {
    dessert.then((data) => {
      console.log(data);
      setDessertData(data);
    });
  }, []);

  return (
    <Box>{dessertData ? <Product productData={dessertData} /> : null}</Box>
  );
};
