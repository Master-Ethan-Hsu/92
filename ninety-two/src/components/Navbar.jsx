import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";

const styles = {
  NavbarStyle: {
    background: "#c3b3a4",
    position: "sticky",
  },
  NavbarText: {
    fontSize: 15,
    cursor: "pointer",
    mr: "1rem",
    // "@media (max-width: 900px)": {
    //   fontSize: 6,
    // },
  },
};

export const Navbar = () => {
  const navigate = useNavigate();
  const media900 = useMediaQuery("(max-width: 900px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goNav = (url) => {
    navigate(url);
  };

  const list = () => (
    <Box sx={{ width: 280 }} role="presentation" onClick={toggleDrawer}>
      <List sx={{ pt: 3, pl: 2 }}>
        {["麵包Bread", "咖啡Coffee", "關於我們About us", "Q&A"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      {media900 ? (
        <AppBar sx={styles.NavbarStyle}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: "flex" }}
            >
              <Box
                component="img"
                sx={{ width: "40px", height: "40px" }}
                alt="The house from the offer."
                src={logo}
              />
            </IconButton>

            <Box>
              <MenuIcon onClick={toggleDrawer}></MenuIcon>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                  sx: {
                    backgroundColor: "#c3b3a4",
                  },
                }}
              >
                {list()}
              </Drawer>
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar sx={styles.NavbarStyle}>
          <Toolbar sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Box
                component="img"
                sx={{ width: "90px", height: "90px" }}
                alt="The house from the offer."
                src={logo}
              />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                mb: 2.5,
              }}
            >
              <Typography sx={styles.NavbarText} onClick={() => goNav("/")}>
                首頁 Home
              </Typography>
              <Typography
                sx={styles.NavbarText}
                onClick={() => goNav("dessert")}
              >
                甜點Dessert
              </Typography>
              <Typography sx={styles.NavbarText} onClick={() => goNav("bread")}>
                麵包Bread
              </Typography>
              <Typography
                sx={styles.NavbarText}
                onClick={() => goNav("coffee")}
              >
                咖啡Coffee
              </Typography>
              <Typography sx={styles.NavbarText} onClick={() => goNav("about")}>
                關於我們About us
              </Typography>
              <Typography sx={styles.NavbarText} onClick={() => goNav("qa")}>
                Q&A
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
};
