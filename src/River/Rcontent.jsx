import { Box, ListItemIcon, Stack, Typography } from '@mui/material'
import React from 'react'


const Rcontent = () => {
  return (
    <>
    
    <Box flex={3} padding={10} >
      <Stack spacing={3}>
      <Typography variant='h4' component='span' > River</Typography>
      
      <Typography  paddingLeft={3}><span style={{paddingLeft:' 50px'}}>A</span> river is a natural, flowing body of fresh water moving in a channel across land, typically downhill due to gravity, from a source (like a spring or glacier) towards a larger body of water like a sea, lake, or ocean, carrying water and sediment and shaping landscapes, providing vital habitats, and serving as resources for humans</Typography>
      
      <Typography variant='h4' component='span'>Key characteristics of a river</Typography>

      <Box paddingLeft={5}>
        <Stack spacing={3}>

          <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Flowing water:</span>A river is defined by its flowing current, which carries water from its source to its mouth. </Typography>
          <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Channel:</span> The path the river takes is called a riverbed, and the land alongside it is known as the riverbank.</Typography>
          <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Freshwater:</span>Rivers primarily contain freshwater, though some may become brackish near the mouth. </Typography>
          <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Formation:</span> Rivers are formed by various sources of water, including rainfall, melting snow and glaciers, and groundwater seepage. </Typography>
          <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Gravity:</span> The force of gravity pulls the water downhill from its source to its mouth.</Typography>
          <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Habitat:</span> Rivers support a diverse range of aquatic life and create unique ecosystems along their banks. </Typography>

        </Stack>

      </Box>

      <Box  padding={10} sx={{
        borderBlock:'solid'
      }}>
      <Typography fontSize={40}>India has more than 400 rivers, which are often categorized into major and minor systems. There are seven major river systems—Indus, Brahmaputra, Narmada, Tapi, Godavari, Krishna, and Mahanadi—along with countless tributaries that make up the country's diverse river network.</Typography>
      </Box>

      <Typography variant='h4' component='span' >India Rivers</Typography>

      <Typography><span style={{paddingLeft:' 40px'}}>The</span> Indian rivers, divided into Himalayan (Ganga, Indus, Brahmaputra) and Peninsular (Godavari, Krishna, Kaveri) systems, are the nation's lifelines, providing water, irrigation, transport, and power, shaping culture and supporting huge populations, though facing challenges from pollution and climate change, with most draining into the Bay of Bengal. These rivers, from perennial glacial fed systems like the Ganga to seasonal peninsular streams, sustain agriculture, serve as sacred sites, and are crucial for economic development, with major cities often built on their banks. 
      </Typography>

      <Typography variant='h4' component='span' > Himalayan River Systems</Typography>   

      <Box paddingLeft={5}>
        <Stack spacing={3}>

      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}>Ganga (Ganges): </span>India's national river, sacred and life-sustaining, originates from Gangotri Glacier (Gaumukh) and flows through many states, forming the Ganga-Brahmaputra delta.</Typography>
       
      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Indus:</span> Rises near Mansarovar, flows through India and Pakistan to the Arabian Sea; major tributaries in India include Sutlej, Beas, Ravi.</Typography>
      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}>Brahmaputra: </span>Also originates in Tibet, joins the Ganga in Bangladesh, forming a massive delta.  </Typography>
      
      </Stack>
      </Box>

      <Typography variant='h4' component='span'>Peninsular River Systems </Typography>

      <Box paddingLeft={5}>
        <Stack spacing={3}>
        <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}>Godavari:  </span>The largest peninsular river, often called the "Dakshin Ganga". </Typography>
      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}>Krishna: </span> Flows through Maharashtra, Karnataka, Telangana, and Andhra Pradesh, emptying into the Bay of Bengal.</Typography>
      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Narmada:</span> Flows westwards through Madhya Pradesh and Gujarat, emptying into the Arabian Sea.
</Typography>
      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> Mahanadi & Kaveri:</span> Other major rivers supporting large regions.  </Typography>
      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> </span> </Typography>
      <Typography> <span style={{fontWeight:'bold',fontSize:'20px'}}> </span> </Typography>
      
      </Stack>
      </Box>
      </Stack>
    </Box>
  
    
    
    </>
  )
}

export default Rcontent