import React from "react";
import Box from "@mui/material/Box";
import { Product } from "./Product";
const styles = {
  mainContainer: {
    height: "150vh",
    color: "red",
    backgroundColor: "#FDF5E6",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    overflow: "hidden",
  },
  landingImage: {
    mt: 30,
    width: "99vw",
    borderRadius: "8px",
  },
};
{
  /* <Product /> */
}
export const MainLayout = () => {
  return (
    <Box sx={styles.mainContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Box
          component={"img"}
          sx={styles.landingImage}
          src={require("../images/landing_image.png")}
        ></Box>
      </Box>
    </Box>
  );
};
