import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Rleft = () => {
  return (
    <Box flex={1} padding={5} position='sticky' >
        
        <Stack spacing={5}>
         
         <Box>

         <img src="src\River\Indus.jpeg"  alt="Indus"   style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}>Indus</Typography>

         </Box>

         <Box>

         <img src="src\River\Mahanadi.jpg" alt="Mahanadi" style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}>Mahanadi</Typography>

         </Box>


         <Box>

         <img src="src\River\bhramma putra.jpeg" alt="Brahmaputra" style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}>Brahmaputra</Typography>

         </Box>


         <Box>

         <img src="src\River\ganga.jpeg" alt="Ganga (Ganges)"  style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}>Ganga (Ganges)</Typography>

         </Box>

         <Box>

         <img src="src\River\godavar.jpg" alt="Godavari" style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}>Godavari</Typography>

         </Box>

         <Box>

         <img src=" src\River\krishana.jpg  " alt=" Krishna "  style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}>Krishna  </Typography>

         </Box>
         <Box>

         <img src=" src\River\Narmada.jpg  " alt="Narmada " style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}>Narmada  </Typography>

         </Box>
         <Box>

         <img src=" src\River\Kaveri.jpg  " alt="Kaveri " style={{ width:'300px', height:'100'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}> Kaveri </Typography>

         </Box>
         <Box>

         <img src=" src\River\Yamuna.jpg  " alt=" Yamuna " style={{ width:'300px', height:'150'}} />

         <Typography  variant='h5' sx={{display:'flex',justifyContent:'center',}}> Yamuna </Typography>

         </Box>

         <Box>
          <Typography variant='h5'>Here are 10 rivers in India:</Typography>

          <Box display='flex' justifyContent='center' padding={2} >

          <Stack spacing={2}>

            <Typography variant='h6 ' component='span' > Krishna</Typography>
            <Typography variant='h6 ' component='span' > Tapti (Tapi) </Typography>
            <Typography variant='h6 ' component='span' > Chambal  </Typography>
            <Typography variant='h6 ' component='span' > Son  </Typography>
            <Typography variant='h6 ' component='span' > Sabarmati </Typography>
            <Typography variant='h6 ' component='span' > Gomti </Typography>
            <Typography variant='h6 ' component='span' > Ghaghara </Typography>
            <Typography variant='h6 ' component='span' > Kosi </Typography>
            <Typography variant='h6 ' component='span' > Gandaki </Typography>
            <Typography variant='h6 ' component='span' > Hooghly (Hugli) </Typography>
            
            

          </Stack>
          </Box>
         </Box>
        

        </Stack>
    </Box>
  )
}

export default Rleft