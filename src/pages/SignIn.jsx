import React from 'react'
import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'
 import { createTheme,  } from '@mui/material/styles';
import { Label } from '@mui/icons-material';
import { ThemeProvider } from '@mui/material/styles';

const SignIn = () => {
  const [email,setEmail]=useState('')
  const [key,setKey]=useState('')
  const navigate=useNavigate()

  
  const changeLocation=()=>{
    if(key=='2161'){
    navigate('/home')
    }
  }
 




  
  return (
   
      
        
          
        <Container maxWidth={false}  disableGutters className='login-custom' >
          <CssBaseline />
    <Box >
   <Grid container   justifyContent="space-between" alignItems="center"   sx={{ minHeight: '100vh' }} >

     <Grid   >
          
       <Box  justifyContent='center'  alignItems='center' sx={{ minHeight: '100vh' }}   >
             <Typography sx={{display:'flex',justifyContent:'center'}}> Mega Deluxe blogging</Typography>
        </Box>
           </Grid>

    <Grid container direction='column'  alignItems='end' justifyContent='center'   sx={{ minHeight: '100vh' }}>
      
         <Typography sx={{display:'flex',justifyContent:'center'}}> Mega Deluxe blogging</Typography>
          
          <Grid>
        <Box sx={{backgroundColor:'white',padding:"10px",paddingTop:'30PX'}}  >
          
          <TextField label='email' sx={{"& .MuiOutlinedInput-input": {
          height: '8px', },width:'300px',paddingBottom:'20px'}}   onChange={(e)=>setEmail(e.target.value)}  /> <br />
        
          <TextField label='Password' type='password' sx={{"& .MuiOutlinedInput-input": {
          height: '8px', },
          width:'300px'}}   onChange={(e)=>setKey(e.target.value)} /> <br /> 
          <Box padding={2} display='flex' justifyContent='center'>
            <Button variant='contained'  loadingPosition='center' onClick={changeLocation}> Login</Button>

          </Box>

          <Box display='flex' padding={5} >
            <Typography sx={{paddingRight:'10px',paddingTop:'10px'}}>Create A Acount</Typography>
            <Button variant='contained'  loadingPosition='center' onClick={()=>navigate('/signup')}>SinUp</Button>
          </Box>
         

          </Box>
          </Grid>
          
        
        
       </Grid>
  
  </Grid>
  </Box>
  </Container>
 
  
  )
}

export default SignIn