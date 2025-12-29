import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userInfo } from '../Feature/UserSLicer'

const SinUp = () => {

  
  const navigate=useNavigate()

  const dispatch=useDispatch()

  const [userData,setUserData]=useState({
    name:'',
    userId:'',
    email:'',
    dpasswor:'',
  })

  const handleChange=(event)=>{
        const {name,value}=event.target;
       setUserData((currentinput)=>{
        return{...currentinput,[name]:value}
       })
     
    }

    

 
    const addUser=(e)=>{
        e.preventDefault()
        dispatch(userInfo(userData))
        alert('your Blogginn account is created')
          navigate('/')

    }

  



  
  
    


   
   
  return (
   <>
    <Box   >

      <Container  sx={{maxHeight:'1000px'}} maxWidth={false}  disableGutters>

       <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        
        <Grid container justifyContent='center' alignItems="center" sx={{ minHeight: '100vh' }}>

             <Box justifyContent="center" width={400} alignItems="center"  sx={{
              backgroundColor:'white',border:'solid',height:'500px'
             }}  >

              <Typography variant='h4' justifyContent='center' alignItems='center' display='flex' sx={{fontFamily:'emoji'}} >Rigesyer Form</Typography>

              <Stack spacing={2}>



                <TextField label='Name' name='name' value={userData.name} sx={{"& .MuiOutlinedInput-input": {
                          height: '8px', } ,backgroundColor:'white',padding:'10px'}}  onChange={handleChange} ></TextField>

                <TextField label='userId' name='userId' value={userData.userId}  sx={{"& .MuiOutlinedInput-input": {
                          height: '8px', } ,backgroundColor:'white',padding:'10px'}}  onChange={handleChange} > </TextField>
                
                <TextField label='email' name='email' value={userData.email}  sx={{"& .MuiOutlinedInput-input": {
                          height: '8px', } ,backgroundColor:'white',padding:'10px'}} onChange={handleChange}  > </TextField>
                
                <TextField label='dpasswor' name='dpasswor' value={userData.dpasswor}  sx={{"& .MuiOutlinedInput-input": {
                          height: '8px', } ,backgroundColor:'white',padding:'10px'}}  onChange={handleChange} > </TextField>

                

              </Stack>

              <Box display='flex' justifyContent='center' padding={10} >
              <Button variant='contained' onClick={addUser}  > Sign-UP</Button>
              
              </Box>

             </Box>

        </Grid>
        
        </Box> 

      </Container>

    </Box>
   
   </>
  )
}

export default SinUp