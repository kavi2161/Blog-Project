import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotePost = () => {
  const navigate=useNavigate()
  return (
    <Container>
    <Box sx={{padding:'10px'}}>
    <img src="src\Note\N.b.jpg" alt=" Note Book" width={600} height={400}   />
    <br/>
    <Typography variant='p'>Choosing the right notebook size can significantly impact your productivity, organization, and overall writing experience. Whether you are a student, a professional, or someone who enjoys journaling, understanding the various notebook sizes available in the market is essential.

      This article offers a complete guide to help you select the appropriate notebook size for your requirements. </Typography>
    
    </Box>
    <br />
    <br/><Box>
      
      <Button variant='contained' onClick={()=>navigate('/note')}>Explore</Button>
    
      
    </Box>
    
    </Container>
  )
}

export default NotePost