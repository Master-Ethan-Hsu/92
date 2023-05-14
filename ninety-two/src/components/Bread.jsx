import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Product from "./Product";
import { getPrdouctCate } from "./../hook/usePrdouctCate";

export const Bread = () => {
  const [breadData, setBreadData] = useState();
  const bread = getPrdouctCate("bread");

  useEffect(() => {
    bread.then((data) => {
      console.log(data);
      setBreadData(data);
    });
  }, []);

  return <Box>{breadData ? <Product productData={breadData} /> : null}</Box>;
};
