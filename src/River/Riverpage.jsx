
import React from 'react'
import Rheader from './Rheader'
import Rcontent from './Rcontent'
import Rleft from './Rleft'
import Rfooter from './Rfooter'
import { Box, Container, Grid, Stack } from '@mui/material'

 



const Riverpage = () => {
  return (
    <>
    <Rheader/>
    <Container maxWidth='xl'>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
    <Rcontent/>
      <Rleft />
    </Stack>
    </Container>
    <Rfooter/>
    
    </>
  )
}

export default Riverpage