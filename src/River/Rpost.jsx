import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Rpost = () => {
  const navigate=useNavigate()
  return (
   <Container>
    <Box sx={{padding:'10px'}}>
    <img src="src\River\godavar.jpg" alt=" Indain River" width={600} height={400}   />
    <br/>
    <Typography>Indian rivers, vital lifelines shaping geography, culture, and economy, are broadly divided into Himalayan (perennial, like Ganga, Indus, Brahmaputra) and Peninsular (seasonal, like Godavari, Krishna, Mahanadi, Narmada) systems, providing water, irrigation, and supporting cities, yet facing severe pollution from urbanization and industry, prompting conservation efforts including legal personhood initiatives. </Typography>
    <Typography variant='p'><Typography variant='h6'>Lifeblood of India: </Typography>Provide drinking water, irrigation for agriculture, power, transportation, and support livelihoods.  </Typography>
    
    </Box>
    <br />
    <br/><Box>
      
      <Button variant='contained' onClick={()=>navigate('/river')}>Explore</Button>
    
      
    </Box>
    
    </Container>
  )
}

export default Rpost