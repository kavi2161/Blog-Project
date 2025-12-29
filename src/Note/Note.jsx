import { Box, Button, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemText, Menu, MenuItem, Paper, Stack, Table, TextField, Typography } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import React, { useState } from 'react'
import { notecomment } from '../Feature/NoteSlicer';
import { useDispatch, useSelector } from 'react-redux';
import NoteFotter from '../pages/NoteFotter';
import { useNavigate } from 'react-router-dom';





const Note = () => {
  const navigate=useNavigate()

  const [anchorEl, setAnchorEl]=useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch=useDispatch()
  const [comment, setComment] = useState('');
  
      const handleSubmit = () => {
  
           dispatch(notecomment(comment));
               return setComment('') 
    };
    const comments=useSelector((state)=>state.notecomment.notecomment)
      console.log(comments,'check');
  
   return (<>
    
      <Box  sx={{
        backgroundColor:'#0a010cff',
        width:'1600px',
        height:'200px'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, pb: 4,  }}> 
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid  >
                <Typography variant="h4" className="animated-text" sx={{
          fontSize:'50px',
          color:'white',
         justifyContent:'center',
          display:'flex',
        alignContent:'center',
          
       }}  >
         GanaNoteBooks <AutoStoriesIcon sx={{color:'blue'}}></AutoStoriesIcon>
         </Typography>
                </Grid> 
                <Grid  >
              <Box component="form" sx={{ display: 'flex', mt: { xs: 3, md: 0 } }}>
                <Button sx={{
                  color:'white'
                }}> Home</Button>
                
                <Button onMouseOver={handleClick} sx={{
                  color:'white'
                }} >
        Product
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Spiral Notebook</MenuItem>
        <MenuItem onClick={handleClose}>Composition Notebook</MenuItem>
        <MenuItem onClick={handleClose}>Diary</MenuItem>
        <MenuItem onClick={handleClose}>Traveler's Notebook</MenuItem>
        <MenuItem onClick={handleClose}>Grid Paper Notebook</MenuItem>
      </Menu>
              </Box>
              </Grid>  

            <Grid  >
              <Box component="form" sx={{ display: 'flex', mt: { xs: 3, md: 0 } }}>
                <img src="src\Note\N.H.p.jpg" alt=" note"  width={290}/>
              </Box>
              </Grid>    
            </Grid>
          </Box>

        </Container>
       
      </Box>

      <Card sx={{ display: 'flex', maxWidth: 1000, margin: 10 }}>

        <CardMedia 
        component="img"
        sx={{ width: 150, flexShrink: 0, }} // Prevents image from growing/shrinking
        image='src\Note\dairyB.jpeg'
        alt="Side image"  />
     

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
           <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
            Dairy 2026
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="p">
            Guna 2026 diary collection has a wide range of patterns and designs to make it more cool and unique. Premium 10 varieties of diary collections are available only on Matrikas; buy diary 2026 online. Bringing the diary everywhere makes it easier to pen down the information on the go, accurate your to-do list, and make appointments and goals in a systematized method. In addition, our diary 2026 has a premium print cover, lined pages, page marker and elastic closure to keep the diary secured. 
          </Typography>
           </CardContent>

      </Box>

       </Card>


       <Stack
      direction="coloumn"        // Aligns items horizontally
      spacing={25}            // Adds space between the image and text
      alignItems="center"    // Vertically centers the items
      sx={{ padding: 2, border: '1px solid #ccc', maxWidth: 1600 }}
    >
      {/* Image using MUI Box for styling */}
      <Box
        component="img"
        src='src\Note\ChildN.jpeg'
        alt="Side by side image"
        sx={{ width: 500, height: 400, borderRadius: '50%' }}
      />
      
      {/* Text */}
      <Typography variant="body1" sx={{
        width:'600px'
      }}>
         2026 will be a great start with our customized diary collections. Matrikas diary will be your great companion, from every time to every page.
      </Typography>
    </Stack>

    <Typography variant='h4' sx={{padding:'30px'}}>Here’s a detailed look at the most common notebook sizes available:

</Typography>

    <Container  sx={{justifyContent:'center'}} >
      <Stack spacing={50}>
      
      <Box sx={{
     
       
       
      }}>
        <Typography  variant='h3'> 1.CardNoteBook</Typography>

  
        <img src="src\Note\card.jpeg" alt=" CardNoteBook"  style={{paddingLeft:'300px'}} width={500} height={500}/>
        <br />

        <Typography><Typography variant='h5' component='span'>Size:</Typography> 62 x 88 mm (2.4 x 3.5 inches)</Typography>
          <Typography> <Typography variant='h5' component='span'> Usage:</Typography> Ideal for jotting down quick notes and ideas on the go.
             Its compact size makes it perfect for transferring notes to larger notebooks later.
             </Typography>
             <Button variant='contained' onClick={()=>navigate('/buy')}>buy</Button>

             
             
             <Typography  variant='h3' sx={{paddingTop:'20px'}} > 2.A4 Notebook</Typography>
            <img src="src\Note\N.Pr1.jpg" alt="A4 Notebook" style={{paddingLeft:'300px'}}   width={500} height={500}/>
        

        <Typography><Typography variant='h5' component='span'>Size:</Typography> 210 x 297 mm</Typography>
          <Typography> <Typography variant='h5' component='span' sx={{paddingBottom:'30px'}}> Usage:</Typography> Similar to the US letter size, it’s ideal for comprehensive writing projects, artistic drafts, and presentations. Globally recognized for its standardized size and quality paper.
             </Typography>
             <Button variant='contained' onClick={()=>navigate('/buy')}>buy</Button>


             <Typography  variant='h3' sx={{paddingBottom:'20px',paddingTop:'10px'}} > 3.A5 Notebook</Typography>


              <img src="src\Note\ChildN.jpeg" alt="A5 Notebook" style={{paddingLeft:'300px'}}   width={500} height={500}/>
        

        <Typography><Typography variant='h5' component='span'>Size:</Typography> 210 x 297 mm</Typography>
          <Typography> <Typography variant='h5' component='span'> Usage:</Typography> Comparable to an iPad in size, this notebook is versatile and stylish. Suitable for bullet journaling, sketching, and use in both school and work settings.
             </Typography> 
             <Button variant='contained'  onClick={()=>navigate('/buy')}>buy</Button>

             <Box sx={{paddingTop:'20px'}}>

              <Typography variant='h3' component='span' sx={{paddingLeft:'250px' , paddingTop:'200px'}}> Common notebook sizes</Typography>
                <Typography sx={{paddingLeft:'300px',paddingTop:'20px'}}> * Notebooks in India are widely available in the standard international A and B series sizes, but manufacturers also produce some unique dimensions that are popular locally, especially for school "long books".</Typography>
                  <Box sx={{paddingLeft:'300px',paddingTop:'20px'}}>
                    </Box>

                    <Box display="flex" justifyContent='center' alignItems="center" sx={{width:'500px'}}>
                  <Table variant='outline' sx={{ '& thead th:nth-child(1)': { width: '20%' } }}>
                    <thead style={{border:"solid"}}>
                      <tr style={{ width: '40%' }}>
                        <th style={{ width: '40%' }}>Size Name</th>
                        <th style={{ width: '40%' }}>Common Use</th>
                      </tr>
                 </thead>
                 <tbody style={{border:"solid"}}>
                   <tr>
                    <td style={{border:"solid"}} >A4</td>
                    <td style={{border:"solid"}}>Professional and academic use, detailed notes, reports</td>
                   </tr>
                   <tr  >
                    <td style={{border:"solid"}} >"Indian" A4</td>
                    <td style={{border:"solid"}} >A local variation, popular for school and office</td>
                   </tr>
                   <tr >
                    <td style={{border:"solid"}}>Foolscap Size (Long Book)</td>
                    <td style={{border:"solid"}}>Often used in schools for extensive writing/subjects</td>
                   </tr>
                   <tr>
                    <td style={{border:"solid"}} >A5</td>
                    <td style={{border:"solid"}} >Versatile, popular for personal journals, planners, and portability</td>
                   </tr>
                   <tr>
                    <td style={{border:"solid"}} >"Indian" B5</td>
                    <td  style={{border:"solid"}}>A good balance of writing space and portability</td>
                   </tr>
                   <tr>
                    <td style={{border:"solid"}}  >"Standard" / "Regular"</td>
                    <td style={{border:"solid"}}  >Common sizes for general school exercise books</td>
                   </tr>
                   <tr>
                    <td style={{border:"solid"}}  >Pocket/A6</td>
                    <td  style={{border:"solid"}}>Compact for quick notes and carrying on the go</td>
                   </tr>
                 </tbody>
                

                  </Table>
                   </Box>
                  </Box>
               </Box>
               </Stack>

    </Container>
    <Box sx={{display:'flex',justifyContent:'center',paddingBottom:'10px'}}>
    <Paper elevation={3} sx={{ p: 2, mt: 3,width:'400px',}}>
      <Typography variant="h6" gutterBottom>
        Leave a Comment
      </Typography>
      <Box component="form" noValidate autoComplete="off" >
        <TextField
          label="Your Comment"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          variant="outline"
          color="error"
          onClick={handleSubmit}
          disabled={!comment.trim()} // Disable if comment is empty
        >
          Submit Comment
        </Button>
      </Box>

      <List>
            {comments.map((comment, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={comment} />
              </ListItem>
            ))}
          </List>
    </Paper>
    </Box>

      
       <NoteFotter/> 
       
    
   </>)
}

export default Note