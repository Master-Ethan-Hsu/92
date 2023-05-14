import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Product from "./Product";
import { usePrdouctCate } from "./../hook/usePrdouctCate";

export const Coffee = () => {
  const [coffeeData, setCoffeeData] = useState();
  const bread = usePrdouctCate("cafe");

  useEffect(() => {
    bread.then((data) => {
      console.log(data);
      setCoffeeData(data);
    });
  }, []);

  return <Box>{coffeeData ? <Product productData={coffeeData} /> : null}</Box>;
};
