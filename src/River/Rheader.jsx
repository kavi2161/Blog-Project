import React from 'react'
import IndainBackground from '../../src/River/H back.jpg'
import { AppBar, Box, createTheme, ThemeProvider, Toolbar, Typography } from '@mui/material'
 
const cTheme=createTheme({
  palette:{
    main: 'rgb(255, 255, 255)',
    light: 'rgba(144, 8, 103, 1)',
  }
})

const Rheader = () => {
  return (
    <>
    <ThemeProvider theme={cTheme}>
    <Box    sx={{
          backgroundImage: `url(${IndainBackground})`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          minHeight: '150px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%' ,
         
          
        }}> </Box>

        <Box sx={{width: '100%' ,paddingTop:'20px'  }}>
         <AppBar position="static" sx={{ backgroundColor:'main',
         border:'solid',height:'90px',borderColor:'main.light'
         }}>
      
            <Typography className='river-custom' sx={{ display:'flex', 
               justifyContent:'center' ,
               alignItems:'center',
               fontSize:'70px',
               fontFamily:'emoji'
                

                }}>  INDIAN RIVERS</Typography>
         
         </AppBar>
        </Box>
        </ThemeProvider>

    </>
  )
}

export default Rheader