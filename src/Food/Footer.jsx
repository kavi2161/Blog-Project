import { Box ,Container,Grid ,IconButton , Typography, } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email,setEmail]=useState('')
    const [key,setKey]=useState('')
    const navigate=useNavigate()
  
    
    const changeLocation=()=>{
      if(key=='2161'){
      navigate('/home')
      }
    }
    
  return (
   <Box
      
      sx={{
        backgroundColor: '#5d06cfff', 
        color: '#fbfcfcff', 
        py: 6, 
        maxWidth:'100%'
        
      }}
    >
     
      <Box sx={{ mb: 2, pb: 2, borderBottom: '1px solid rgba(255, 255, 255, 0.1)',display:'flex',
        justifyContent:'center' }}>
        <Grid container justifyContent="space-between" alignItems="center">
           <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center'}}>
            <IconButton   color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color='inherit'>
                <InstagramIcon/>
            </IconButton>
            </Box>
            
        </Grid>
        
      </Box>

         <Typography sx={{display:'flex',justifyContent:'center'}}> © 2025  All Rights Reserved.

A Food Partner Site.</Typography>
    </Box>
  )
}

export default Footer