import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import NoteFotter from '../pages/NoteFotter';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const paperSizesData = [
  { size: 'A4', use: 'Professional and academic use, detailed notes, reports' },
  { size: '"Indian" A4', use: 'A local variation, popular for school and office' },
  { size: 'Foolscap Size (Long Book)', use: 'Often used in schools for extensive writing/subjects' },
  { size: 'A5', use: 'Versatile, popular for personal journals, planners, and portability' },
  { size: '"Indian" B5', use: 'A good balance of writing space and portability' },
  { size: '"Standard" / "Regular"', use: 'Common sizes for general school exercise books' },
  { size: 'Pocket/A6', use: 'Compact for quick notes and carrying on the go.' },
];

const CNote = () => {

    const navigate=useNavigate()
  return (
    <>  
    <Container  sx={{ display:'flex', justifyContent:'center', alignItems:'center',width:'800px', paddingBottom:'100px' }}  >

       <Box>
        
          <Stack spacing={2}>

             <Box paddingTop={15}>

                <Typography   sx={{ display:'flex',justifyContent:'center',fontWidth:'100px'}} variant='h2'>  ABC NoteBooks<AutoStoriesIcon sx={{color:'black'}}></AutoStoriesIcon> </Typography>

             </Box>

             <Typography variant='body2' component='p' sx={{
                       fontWeight: 300,
                       color: '#555',
                       fontSize: '14px',
                       paddingTop:'10px'}}  > It can serve as a personal space where you jot book notes, record your thoughts, reflections, favorite quotes, or <Typography  variant='body2' component='span' sx={{
                       fontWeight: 300,
                       color: '#555',
                       fontSize: '14px',
                       paddingLeft:'150px'

                }}  >    anything that resonates with you from the books you read. </Typography> </Typography>



                 <Box >
                
                      <img src="src\Note\N.b.jpg" alt=" note Book"  style={{width:'100%',padding:'20PX'}} />
                  </Box>

                  <Box    sx={{ padding:'10px'}}>

                     <Typography variant='h3' component='span'>Why We Need Physical Notebook</Typography>

                     <Typography  sx={{paddingLeft:'60px',paddingTop:'20px'}} > <span style={{paddingLeft:'30px'}} > In </span>  2025, despite the ubiquity of AI and digital devices, physical notebooks remain essential because they provide cognitive and psychological benefits that digital tools cannot replicate. Research consistently shows that the tactile act of writing by hand directly impacts how the brain processes, stores, and understands information.  </Typography>
                     
                        <Box sx={{ display:'flex',justifyContent:"center"}}  >

                           <List sx={{  listStyleType: 'decimal', pl: 4}} >

                                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText  sx={{fontSize:'bold'}}  primary="Superior Memory and Learning" />
                                 </ListItem>

                                 
                                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText   primary="   Focus and Distraction-Free Flow " />
                                 </ListItem>

                                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText    primary="   Creative Freedom " />
                                 </ListItem>

                                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText  primary="  Reliability and Longevity " />
                                 </ListItem>
                                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                                        <ListItemText  primary=" Mental Well-being  " />
                                 </ListItem>
                                 


                           </List>

                           
                        </Box>

                        <Box>

                           <Box sx={{paddingBottom:'20px'}} >

                           <Typography  variant='h4' component='span'   > Choosing the Right Notebook Size for Your Needs: </Typography>

                           </Box>

                           <Box paddingBottom={5}>


                           <Typography sx={{paddingLeft:'40px'}}  > Choosing the right notebook size can significantly impact your productivity, organization, and overall writing experience. Whether you are a student, a professional, or someone who enjoys journaling, understanding the various notebook sizes available in the market is essential.   </Typography>
                         
                            </Box>

                          </Box>

                        <Box  sx={{paddingLeft:'100px',width:'500px'}}>
                        <TableContainer component={Paper}>
                                <Table>
                                 
                                  <TableHead>
                                    <TableRow>
                                      <TableCell  >
                                        Size Name
                                      </TableCell>
                                      <TableCell>
                                        Common Use
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  
                                 
                                  <TableBody>
                                    {paperSizesData.map((row) => (
                                      <TableRow key={row.size}>
                                        <TableCell component="th" scope="row">
                                          {row.size}
                                        </TableCell>
                                        <TableCell>
                                          {row.use}
                                        </TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                           </TableContainer>

                           </Box>

                           
                  </Box>


          </Stack>

          <Box   padding={5}>

                              <Paper >
                                   <Grid sx={{display:'flex',justifyContent:"center",alignItems:'center'}}>

                                    <Grid  paddingRight='20px'>
                                      
                                      <Card

                                        sx={{ maxWidth: 300,height:350,
                                            transition: 'background-color 0.3s ease, transform 0.3s ease'  ,
                                            cursor: 'pointer',
                                           '&:hover': { transform: 'scale(1.05)',   boxShadow: 6,  } }} >
                                             <Box>
                                                     <img src="src\Note\card.jpeg" alt=" Short note" width={327} height={200} />
                                            </Box> 

                                             <CardContent sx={{padding:'10px'}}>
                                              
                                              <Typography><Typography variant='h6' component='span'>Size:</Typography> 62 x 88 mm (2.4 x 3.5 inches)</Typography>
                                                        <Typography> <Typography variant='h6' component='span'> Usage:</Typography> Ideal for jotting down quick notes 
                                                           </Typography>

                                             </CardContent>

                                             <CardActionArea >
                                            
                                              <Button  variant='text'  loadingPosition='end' onClick={()=>navigate('/buy')} > Buy</Button>

                                             </CardActionArea>

                                      </Card>

                                    </Grid>



                                     <Grid  paddingRight='20px'>
                                      
                                      <Card

                                        sx={{ maxWidth: 300,height:350,
                                            transition: 'background-color 0.3s ease, transform 0.3s ease'  ,
                                            cursor: 'pointer',
                                           '&:hover': { transform: 'scale(1.05)',   boxShadow: 6,  } }}>
                                             <Box>
                                                     <img src="src\Note\N.Pr1.jpg" alt=" A4Note Book" width={318} height={200} />
                                            </Box> 

                                             <CardContent sx={{padding:'10px'}}>
                                              
                                              <Typography><Typography variant='h6' component='span'>Size:</Typography> 210 x 297 mm</Typography>
                                                        <Typography> <Typography variant='h6' component='span'> Usage:</Typography> it’s ideal for comprehensive writing projects
                                                           </Typography>

                                             </CardContent>

                                             <CardActionArea >
                                            
                                              <Button  variant='text'  loadingPosition='end' onClick={()=>navigate('/buy')} > Buy</Button>

                                             </CardActionArea>

                                      </Card>

                                    </Grid>
                                    </Grid>


                                    

                              </Paper>



                           </Box>



        </Box>

         

    </Container>

    <NoteFotter/>   
    
    </>
  )
}

export default CNote