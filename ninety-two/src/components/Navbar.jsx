import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const styles ={
    NavbarStyle:{
        display:"flex",
        background:"#9F6E3D",

    },
    NavbarText:{
        mr:3,
        fontSize:20
    }
}

export const Navbar = () => {
    return (
        <Box >
          <AppBar sx={styles.NavbarStyle}position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography sx={styles.NavbarText} >
                首頁 Home 
              </Typography>
              <Typography  sx={styles.NavbarText} >
              甜點Dessert
              </Typography>
              <Typography sx={styles.NavbarText} >
              麵包Bread
              </Typography>
              <Typography sx={styles.NavbarText} >
              咖啡Coffee
              </Typography>
              <Typography sx={styles.NavbarText} >
              關於我們About us
              </Typography>              
              <Typography sx={styles.NavbarText} >
              Q&A
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
}
