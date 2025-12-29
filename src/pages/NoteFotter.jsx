
import React from 'react'
import { Box, Container, Grid, Typography, Link, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const NoteFotter = () => {
  return (
    <>
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2c3e50', // Dark background color
        color: '#ecf0f1', // Light text color
        py: 6, // Vertical padding
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4, pb: 4, borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
             <Grid container justifyContent="space-between" alignItems="center">
                <Grid item xs={12} md={4}>
                    <Typography> adress</Typography>
                    <Typography> 5/107 bajanamada street ,chennai 000001</Typography>
                </Grid>
                <Grid item xs={12} md={5}>
                   <Box component="form" sx={{ display: 'flex', mt: { xs: 3, md: 0 } }}>
                    <Typography> contect information: </Typography>
                    <Typography> 1234567890 </Typography>
                    </Box>  
                    <Typography> abcnotebook@gmail.com </Typography>
                    
                </Grid>
                <Grid>
                    <Box>
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
                    </Box>
                </Grid>
             </Grid>
            </Box> 
      </Container>

    </Box>
    </>
  )
}

export default NoteFotter