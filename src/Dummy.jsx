import { Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Dummy = () => {

    const [email,setEmail]=useState("")
      const [key,setKey]=useState("")
      const navigate=useNavigate()
    
      
      const changeLocation=()=>{
        if(key=='2161'){
        navigate('/home')
        setEmail("")
        setKey("")
        }
      }

  return (
       <Box   >

  <Container className='Dummy-custom' sx={{maxHeight:'1000px'}} maxWidth={false}  disableGutters>
    
      <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>

         <Grid container justifyContent='space-between' alignItems="center" sx={{ minHeight: '100vh' }}>
             
             <Grid   >
                <Box  component='img'  sx={{ height: 200, paddingLeft:'200px'  }} alt="My Company Logo" src='src\assets\logo-svg.svg' />
             </Grid>

             <Grid justifyContent="center" alignItems="center" sx={{paddingRight:'100px',}} >
                
                <Box sx={{backgroundColor:'whete',padding:"10px",paddingTop:'30PX',color:'white'   } }  >
                          
                          <TextField label='email' sx={{"& .MuiOutlinedInput-input": {
                          height: '8px', },width:'300px',paddingBottom:'20px',}}   onChange={(e)=>setEmail(e.target.value)}  /> <br />
                        
                          <TextField label='Password' type='password' sx={{"& .MuiOutlinedInput-input": {
                          height: '8px', },
                          width:'300px', }}   onChange={(e)=>setKey(e.target.value)} /> <br /> 
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

      </Box>
 
        
    
  </Container>
  </Box>
  )
}

export default Dummy