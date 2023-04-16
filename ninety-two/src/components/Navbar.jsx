import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../images/logo.png";

const styles = {
  NavbarStyle: {
    display: "flex",
    background: "#ac7c4c",
    position: "fixed",
  },
  NavbarText: {
    mr: 3,
    fontSize: 20,
  },
};

export const Navbar = () => {
  return (
    <Box>
      <AppBar sx={styles.NavbarStyle} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Box
              component="img"
              sx={{ width: "110px", height: "110px" }}
              alt="The house from the offer."
              src={logo}
            />
          </IconButton>
          <Typography
            sx={[
              styles.NavbarText,
              {
                ml: 5,
              },
            ]}
          >
            首頁 Home
          </Typography>
          <Typography sx={styles.NavbarText}>甜點Dessert</Typography>
          <Typography sx={styles.NavbarText}>麵包Bread</Typography>
          <Typography sx={styles.NavbarText}>咖啡Coffee</Typography>
          <Typography sx={styles.NavbarText}>關於我們About us</Typography>
          <Typography sx={styles.NavbarText}>Q&A</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
