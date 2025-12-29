import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NotePost from '../Note/NotePost'
import Foodpost from '../Food/Foodpost'
import Rpost from '../River/Rpost'



const Project = () => {
  const navigate=useNavigate()
  
  

  
  // useEffect(()=>{
  //   setComment('')
  // },[addComment])

 
  
 
  return (<>

  <Container  disableGutters sx={{display:'flex',direction:'column',width: '100%'}}  >
    <Box  padding={0.5} paddingTop={5} sx={{display:'flex',direction:'column',width: '100%'}}  >  

      <Grid container >
   
     
    
     {/* <NotePost/>
     <Foodpost/>
     <Rpost/> */}
     <Grid padding={1}>

     <Card  sx={{ maxWidth: 370,height:300,
       transition: 'background-color 0.3s ease, transform 0.3s ease'  ,
       cursor: 'pointer',
       '&:hover': {
           
          transform: 'scale(1.05)', 
          boxShadow: 6,
        }

      }}  >
      <CardActionArea onClick={()=>navigate('/react')}>
       <Box>
        <img src="src\assets\react.jpg" alt="Reactive native" width={430} height={200} />
        </Box> 

        <CardContent sx={{padding:'10px'}}>
         
         <Typography gutterBottom variant="h5" component="div"   >React Native</Typography>

         <Typography variant="body2" sx={{ color: 'text.secondary', }}>
          open-source framework developed by Meta for building cross-platform mobile applications using JavaScript and React.
        </Typography>

        </CardContent>
        </CardActionArea>
      
      
    </Card>
    </Grid>


    <Grid padding={1} paddingLeft={2} paddingRight={2}>
     <Card  sx={{ maxWidth: 370,height:300,
       transition: 'background-color 0.3s ease, transform 0.3s ease'  ,
       cursor: 'pointer',
       '&:hover': {
           
          transform: 'scale(1.05)', 
          boxShadow: 6,
        }

      }}  >
      <CardActionArea onClick={()=>navigate('/ABC')}>
       <Box>
        <img src="src\Note\N.b.jpg" alt="Note Book" width={430} height={200} />
        </Box> 

        <CardContent sx={{padding:'10px'}}>
         
         <Typography gutterBottom variant="h5" component="div">Try ABC Notebook</Typography>

         <Typography variant="body2" sx={{ color: 'text.secondary', }}>
         Physical notebooks are versatile tools used for a variety of personal, academic, and professional purposes
        </Typography>

        </CardContent>
        </CardActionArea>
      
      
    </Card>
    </Grid>
    <Grid padding={1}>
     <Card  sx={{ maxWidth: 370,height:300,
       transition: 'background-color 0.3s ease, transform 0.3s ease'  ,
       cursor: 'pointer',
       '&:hover': {
           
          transform: 'scale(1.05)', 
          boxShadow: 6,
        }

      }}  >
      <CardActionArea onClick={()=>navigate('/ifood')}>
       <Box>
        <img src="src\Food\indain food1.jpg" alt="Indain Food" width={430} height={200} />
        </Box> 

        <CardContent sx={{padding:'10px'}}>
         
         <Typography gutterBottom variant="h5" component="div">Indian food</Typography>

         <Typography variant="body2" sx={{ color: 'text.secondary', }}>
          Indian food is a diverse, flavorful cuisine known for its complex use of nutrient-rich, boosting immunity.......
        </Typography>

        </CardContent>
        </CardActionArea>
      
      
    </Card>
    </Grid>
    <Grid padding={1}>
     <Card  sx={{ maxWidth: 370,height:300,
       transition: 'background-color 0.3s ease, transform 0.3s ease'  ,
       cursor: 'pointer',
       '&:hover': {
           
          transform: 'scale(1.05)', 
          boxShadow: 6,
        }

      }}  >
      <CardActionArea onClick={()=>navigate('/river')}>
       <Box>
        <img src="src\River\godavar.jpg" alt="Indain River" width={430} height={200} />
        </Box> 

        <CardContent sx={{padding:'10px'}}>
         
         <Typography gutterBottom variant="h5" component="div">Lifeblood of India</Typography>

         <Typography variant="body2" sx={{ color: 'text.secondary', }}>
          Indian rivers, vital lifelines shaping geography, culture, and economy, are broadly divided into Himalayan (perennial, like Ganga, Indus, Brahmaputra) and Peninsular (seasonal, like Godavari, Krishna, Mahanadi, Narmada) systems, providing water
        </Typography>

        </CardContent>
        </CardActionArea>
      
      
    </Card>
    </Grid>
    <Grid padding={1} paddingLeft={2} paddingRight={2}>
     <Card  sx={{ maxWidth: 370,height:300,
       transition: 'background-color 0.3s ease, transform 0.3s ease'  ,
       cursor: 'pointer',
       '&:hover': {
           
          transform: 'scale(1.05)', 
          boxShadow: 6,
        }

      }}  >
      <CardActionArea onClick={()=>navigate('/post')}>
       <Box>
        <img src="src\assets\react.jpg" alt="Reactive native" width={430} height={200} />
        </Box> 

        <CardContent sx={{padding:'10px'}}>
         
         <Typography gutterBottom variant="h5" component="div">React Native</Typography>

         <Typography variant="body2" sx={{ color: 'text.secondary', }}>
          open-source framework developed by Meta for building cross-platform mobile applications using JavaScript and React.
        </Typography>

        </CardContent>
        </CardActionArea>
      
      
    </Card>
    </Grid>

     </Grid>
    </Box>


     
    

     </Container>

     

    
    </>
  )
}

export default Project