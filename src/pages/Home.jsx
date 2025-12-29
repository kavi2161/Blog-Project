import React from 'react'
import Project from './Project'
import { Box, Container, Divider, Grid, Stack } from '@mui/material'
import { Dashboard } from '@mui/icons-material'
import Dashbord from './Dashbord'

import Right from './Right'

const Home = () => {
  return (<>
  {/* <Grid container direction='column'  alignItems='center' justifyContent='center'   sx={{ minHeight: '75vh' }} > */}
  <Box >
    <Container maxWidth='xl'>
      <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent='space-between'>
    
  <Project />
 
  </Stack>
  </Container>
  </Box>
  {/* </Grid> */}
 
  </>
    
  )
}

export default Home