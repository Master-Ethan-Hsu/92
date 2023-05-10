import * as React from "react";
import Typography from "@mui/material/Typography";
import { getProductData } from "../api/NTApi";
import { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";

export const Dessert = () => {
  const [productData, setProductData] = useState();

  const getData = async () => {
    const productData = await getProductData();
    try {
      if (productData) setProductData(productData);
    } catch {
      throw new Error("can't get product data !");
    }
  };

  useEffect(() => {
    getData();
    console.log("call api");
  }, []);

  useEffect(() => {
    console.log("getting data");
    console.log(productData);
    if (productData) {
      setShowComponent(true);
      console.log(productData);
      console.log(
        productData.map((product) => {
          // console.log(product.id);
          console.log(product.name);
          // console.log(product.price);
          // console.log(product.pic);
        })
      );
    }
  }, [productData]);
};
