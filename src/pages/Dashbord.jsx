import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Dashbord = () => {

  const users=useSelector(( state)=>state.database.data)
  return (
    <>
    <Box >
    <Container  maxWidth={false}  disableGutters>  

      <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>

          <Grid container justifyContent='center' alignItems="center" sx={{ minHeight: '100vh' }}>

             <Box justifyContent="center" width={500} alignItems="center"  sx={{ padding:'10px', 
                           border:'solid',height:'500px'
                          }}  >

                <Stack>
                  
                  <Typography sx={{ borderBlock:'30px',border:'solid' ,fontSize:'30px', display:'flex',justifyContent:'center',fontFamily:'emoji',fontWeight:'100px' }}>  DashBord  </Typography>

                  <Box padding={3}>

                    <Stack >

                 <ol >

                  <li style={{paddingBottom:'20px'}}>
                     
                    <Typography variant="body1">React</Typography>
                  </li>
                  <li style={{paddingBottom:'20px'}}  >
                     
                    <Typography variant="body1">ABCNotes</Typography>
                  </li>
                  <li  style={{paddingBottom:'20px'}}   >
                     
                    <Typography variant="body1">Indain Food</Typography>
                  </li>
                  <li    style={{paddingBottom:'20px'}}  >
                     
                    <Typography variant="body1">Indain River</Typography>
                  </li>
                   {users.map((data, index) => (

                    
                   <li key={index}  style={{paddingBottom:'20px'}}  >
                     
                    <Typography variant="body1">{data.userId}</Typography>
                  </li>

                  ))}
               </ol>

               </Stack>
 
                  </Box>

                  </Stack>   


              </Box>


          </Grid>
         

      </Box>
      
      </Container>
    </Box>
    </>
  )
}

export default Dashbord