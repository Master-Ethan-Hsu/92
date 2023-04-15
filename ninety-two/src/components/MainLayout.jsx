import React from "react";
import Box from "@mui/material/Box";
import { Product } from "./Product";
const styles = {
  mainContainer: {
    height: "60vh",
    color: "red",
    backgroundImage: "url('https://i.imgur.com/WjpmQ5f.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  },
};

export const MainLayout = () => {
  return (
    <Box>
      <Box sx={styles.mainContainer}>
        <Product />
      </Box>
    </Box>
  );
};
