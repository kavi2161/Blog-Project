import { Box, Typography } from '@mui/material'
import React from 'react'
import IndainBackground from '../../src/Food/indain food.jpg'


const Header = () => {
  return (
    <>
    <Box  paddingTop={10}  sx={{
          backgroundImage: `url(${IndainBackground})`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center', 
          minHeight: '300px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%' ,
         
          
        }}>

            <Typography className='indain-food' sx={{
                fontSize:'200px'
            }}> Indain Food</Typography>

    </Box>
    </>
  )
}

export default Header