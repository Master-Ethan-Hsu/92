import React from "react";
import Box from "@mui/material/Box";
import { Dessert } from "./Dessert";
import { useLocation } from "react-router-dom";

const styles = {
  mainContainer: {
    height: "150vh",
    backgroundColor: "#FDF5E6",
    overflow: "hidden",
  },
  landingImage: {
    // position:"sticky",
    width: "99vw",
    borderRadius: "8px",
  },
};
{
  /* <Product /> */
}
export const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <Box sx={styles.mainContainer}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {pathname === "dessert" ? (
          <Dessert />
        ) : (
          <Box
            component={"img"}
            sx={styles.landingImage}
            src={require("../images/landing_image.png")}
          />
        )}
      </Box>
    </Box>
  );
};
