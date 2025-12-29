import Footer from '../Food/Footer'
import { Box, Container, List, ListItem, Grid, Card, CardActionArea, CardContent, ListItemText, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CFood = () => {
  return (
    <>
     <Container  sx={{ display:'flex', justifyContent:'center', alignItems:'center',width:'800px', paddingBottom:'100px' }} >

        <Box paddingTop={15}>

           <Stack spacing={2}>

               <Typography   sx={{ display:'flex',justifyContent:'center',fontWidth:'1000px',fontFamily:'-apple-system', fontSize:'100px'}} variant='h2'>Indian Food </Typography>
               <Typography  variant='body2' component='p' sx={{
                       fontWeight: 300,
                       color: '#555',
                       fontSize: '14px',
                       paddingTop:'5px',
                       

                }} >Indian food is incredibly diverse, known for its aromatic spices , regional variations , staple carbs , flavorful curries , <span  style={{paddingLeft:'30px'}}>popular  </span> snacks , and sweet treats , offering a rich tapestry of tastes from fiery spicy to creamy and tangy. 

               </Typography>

               <Box >
               
                       <img src="src\Food\indain food.jpg" alt=" Indain Food"  style={{width:'100%',padding:'20PX'}} />
                
                </Box>
                <Box sx={{ padding:'10px'}}>

                       <Typography variant='h4' component='span' > What is the most famous Indian food?</Typography><br />

                       <Box  paddingTop={2} paddingBottom={2} >

                          <Typography  component='span'   paddingLeft={5} >  Some of the most popular foods in India include Biryani, Samosas, and Butter Chicken, which are popular across the country and internationally. Regional favorites like Dosa and Idli from the South, and street food like Pani Puri and Vada Pav are also highly popular.   </Typography>
                       
                       </Box>

                       <Typography  variant='h4'component='span'>Popular dishes across India</Typography>


                       <List sx={{ listStyleType: 'square', pl: 4 }}> 
                        
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="Biryani:" /> 
                                  <Typography  component='span' paddingLeft={3} > A layered rice dish with meat or vegetables, spices, and saffron, with many regional variations.  </Typography>
                             </ListItem>              
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="  Samosas:  " /> 
                                  <Typography  component='span'  >  Triangular pastries filled with spiced potatoes, peas, or other savory fillings.   </Typography>
                             </ListItem>              
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="   Butter Chicken:  " /> 
                                  <Typography  component='span'  >   Tender chicken cooked in a creamy, spiced tomato sauce, a dish often associated with North Indian cuisine.    </Typography>
                             </ListItem>              
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="  Naan:  " /> 
                                  <Typography  component='span'  >   A leavened, oven-baked flatbread often served with curries.   </Typography>
                             </ListItem>              
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="  Dosa and Idli:  " /> 
                                  <Typography  component='span'  >  South Indian staples, the dosa is a crispy crepe and idli is a steamed rice cake, often served with sambar and chutney.    </Typography>
                             </ListItem>              
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="   Pani Puri (or Golgappa):  " /> 
                                  <Typography  component='span'  >  A popular street food consisting of crispy hollow balls filled with spiced water, mashed potatoes, and chickpeas.    </Typography>
                             </ListItem>              
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="   Desserts:  " /> 
                                  <Typography  component='span'  > Gulab Jamun, Ras Malai, Kulfi (ice cream).    </Typography>
                             </ListItem>              
                              <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                  <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="  Drinks:  " /> 
                                  <Typography  component='span'  > Lassi (yogurt drink).    </Typography>
                             </ListItem>              
                        
                         </List>

                        <Box paddingTop={3}>

                              
                              <Typography  variant='h3'component='span'>Popular Curry across to try  </Typography>
                        </Box>
                        
                        <Box display='flex' justifyContent='center' paddingTop={3}   paddingRight={20}> 

                            <Typography  variant='h4'component='span'>Curries & Gravies: </Typography>

                            </Box>
                            <Box  display='flex' justifyContent='center'  paddingTop={1} >

                            <List sx={{ listStyleType: 'decimal', pl: 5 }}> 

                                   <ListItem sx={{ display: 'list-item', paddingY: 0.15, paddingX: 0 }}>
                                        <ListItemText    primary="  Butter Chicken   " /> 
                                  </ListItem> 
                                   <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText    primary="   Fish Curry  " /> 
                                  </ListItem> 
                                   <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText    primary="   Chana Masala (chickpeas)  " /> 
                                  </ListItem> 
                                   <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText  primary="  Dal Makhani (lentils)   " /> 
                                  </ListItem> 
                                   <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText    primary="  Palak Paneer (spinach & cheese)   " /> 
                                  </ListItem> 
                                   <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText  p primary="   Rogan Josh (lamb)  " /> 
                                  </ListItem> 
                                   <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText    primary="  Korma (creamy nuts)   " /> 
                                  </ListItem> 


                               </List>


                        </Box>


                </Box>

                {/* <Box >

                      <Grid container >

                         <Grid padding={1}>

     <Card  sx={{ maxWidth: 370,height:300,transition: 'background-color 0.3s ease, transform 0.3s ease'  , cursor: 'pointer',
       '&:hover': {   
          transform: 'scale(1.05)', 
          boxShadow: 6, }}}  >
      <CardActionArea onClick={()=>navigate('/react')}>
       <Box>
        <img src="src\assets\react.jpg" alt="Reactive native" width={430} height={280} />
        </Box> 

        <CardContent sx={{padding:'10px'}}>
         
         <Typography gutterBottom variant="h5" component="span"   >React Native</Typography>

         
        </CardContent>
        </CardActionArea>
      
      
    </Card>
    </Grid>

                      </Grid>

                </Box> */}


                <Box>

                 <Stack  spacing={2}>   

                    <Typography variant='h4' component='span'sx={{paddingTop:'20px'}} > Fine dining and modern Indian</Typography>

           <Typography paddingLeft={10} component='span'><Typography variant='h6' component='span'> <Link href=" https://www.indianaccent.com/newdelhi" target="_blank" >  Indian Accent (New Delhi)</Link>:</Typography> Known for a modern take on Indian cuisine, this restaurant has repeatedly won top awards.
           </Typography>

           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href="https://www.masquerestaurant.com/" target="_blank" > Masque (Mumbai):</Link> </Typography> Focuses on hyperlocal and foraged ingredients, offering a unique and daring menu.  </Typography>
           
           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href=" https://www.chennaimaratha.com/" target="_blank" > Chennai Maratha: </Link> </Typography>Blends contemporary South Indian food with a modern twist on traditional flavors and ingredients.</Typography>
           
           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href=" https://www.foodparadaise.com/" target="_blank" >Food Paradice (Pondicherry): </Link> </Typography> Food Paradise is a popular, value-for-money restaurant in Pondicherry known for its authentic North Indian, South Indian Food</Typography>
           
           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href=" " target="_blank" > </Link> </Typography> </Typography>
               
               </Stack>
                </Box>

               

           </Stack>

           

        </Box>

     </Container>

     <Footer/>
    </>
  )
}

export default CFood 
