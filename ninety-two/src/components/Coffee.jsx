import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Product from "./Product";
import { getPrdouctCate } from "./../hook/usePrdouctCate";

export const Coffee = () => {
  const [coffeeData, setCoffeeData] = useState();
  const bread = getPrdouctCate("cafe");

  useEffect(() => {
    bread.then((data) => {
      console.log(data);
      setCoffeeData(data);
    });
  }, []);

  return <Box>{coffeeData ? <Product productData={coffeeData} /> : null}</Box>;
};
