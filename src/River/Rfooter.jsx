import { Box ,Container,Grid ,IconButton , Typography, } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import React from 'react'

const Rfooter = () => {
  return (
    <Box 
      sx={{
        backgroundColor: 'hsla(192, 86%, 66%, 1.00)', 
        color: '#010708ff', 
        py: 6, 
        maxWidth:'100%',
        height:'20PX'
        
      }} > 
      <Box sx={{ mb: 4, pb: 4, borderBottom: '1px solid rgba(255, 255, 255, 0.1)',display:'flex',
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
   <Box>
<Typography sx={{display:'flex',justifyContent:'center'}}> © 2025  All Rights Reserved.</Typography>
</Box>

</Grid>

         </Box>

              
      </Box>
  )
}

export default Rfooter