import React from 'react'
import Box from '@mui/material/Box';

const styles ={
    mainContainer:{
        height: "100vh",
        color:"red",
        backgroundImage:"url('https://i.imgur.com/WjpmQ5f.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },

}

export const MainLayout = () => {
    return (
        <Box sx={styles.mainContainer}>
          testss
        </Box>
      );
}
