import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Foodpost = () => {
    const navigate=useNavigate()
  return (
    <Container>
    <Box sx={{padding:'10px'}}>
    <img src="src\Food\indain food1.jpg" alt=" Indain Food" width={600} height={400}   />
    <br/>
    <Typography variant='p'>Indian food is a diverse and complex cuisine with deep historical and cultural roots, defined by its extensive use of spices and wide range of regional styles. It varies significantly across different parts of the country due to factors like climate, culture, and religion, with many traditional dishes being vegetarian. The cuisine has evolved over thousands of years, incorporating influences from various invasions and trade routes, and is known for its vibrant flavors, from mild curries to fiery, spicy dishes.  </Typography>
    
    </Box>
    <br />
    <br/><Box>
      
      <Button variant='contained' onClick={()=>navigate('/food')}>Explore</Button>
    
      
    </Box>
    
    </Container>
  )
}

export default Foodpost