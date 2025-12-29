import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'
import { LinearGradient } from 'react-text-gradients';

const Fotter = () => {
  return (
    <>
    <Box 
      sx={{
        backgroundColor:'indigo',
        color: 'white',
        padding: '2rem 0',
        marginTop: 'auto', // For sticky footer behavior
      }}
    >
      <Container maxWidth="lg">
        {/* <Grid container spacing={4}> */}
        <Box sx={{display:'flex',justifyContent:'center'}}  >

            
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
        {/* </Grid> */}
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} React Native. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
    </>
  )
}

export default Fotter