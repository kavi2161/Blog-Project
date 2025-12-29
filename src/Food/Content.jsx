import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'

const Content = () => {
  return (
    <Container sx={{padding:'20px'}}>
        <Stack spacing={2}>

        <Box>
          <Typography component='span'> Indian food is incredibly diverse, known for its aromatic spices (turmeric, cumin, coriander), regional variations (North vs. South), staple carbs (rice, naan, roti), flavorful curries (Butter Chicken, Dal Makhani, Chana Masala), popular snacks (Samosas, Pakoras), and sweet treats (Gulab Jamun, Kulfi), offering a rich tapestry of tastes from fiery spicy to creamy and tangy. </Typography>
          
          
        </Box>
        <Typography variant='h4' component='span' sx={{
            paddingTop:'30px'
          }}>Key Characteristics & Flavors</Typography>
          <Typography sx={{paddingLeft:'10px'}} component='span'><Typography variant='h6' component='span'>Spices:</Typography> A hallmark, using blends like Garam Masala, ginger, garlic, chili, cardamom, and turmeric to create complex tastes.
          </Typography>
          <Typography sx={{paddingLeft:'10px'}} component='span'><Typography variant='h6' component='span'>Regional Variety:</Typography>Cuisine differs significantly from North (rich gravies, dairy) to South (rice-based, coconut, tamarind).
          </Typography>
           <Typography sx={{paddingLeft:'10px'}} component='span'><Typography variant='h6' component='span'>Heat Spectrum:</Typography>Ranges from mild (Butter Chicken) to fiery (Vindaloo). </Typography>
           <Typography variant='h4'>Popular Dishes to Try</Typography>
           <Typography sx={{paddingLeft:'10px'}}component='span'><Typography variant='h6' component='span'>Curries & Gravies:</Typography>Butter Chicken, Dal Makhani (lentils), Chana Masala (chickpeas), Palak Paneer (spinach & cheese), Rogan Josh (lamb), Korma (creamy nuts).
           </Typography>
           <Box sx={{paddingLeft:'30px'}}>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid >
           <img  width={300} style={{}} src="src\Food\Butter chicken.jpg" alt="ButterChicken" />
           <Typography sx={{ fontSize:'20px',paddingLeft:'90px'}}>Butter Chicken</Typography>
           </Grid>
                <Grid >
           <img  width={300} style={{}} src="src\Food\Fish curry.jpg" alt="Fish Curry " />
           <Typography sx={{ fontSize:'20px',paddingLeft:'90px'}}>Fish Curry</Typography>
           </Grid>
                <Grid >
           <img  width={300} style={{
            height:'200px'
           }} src="src\Food\veg dish.jpeg" alt="Chana Masala " />
           <Typography sx={{ fontSize:'20px',paddingLeft:'90px'}}>Chana Masala </Typography>
           </Grid>
           </Grid>
           </Box>

           <Typography variant='h4' component='span' sx={{
            paddingTop:'30px'}}>  Rice Dishes:</Typography>

           <Box>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid>
                    <img src="src\Food\chiken Briyani.jpg" alt=" Chicken Briyani" />
                </Grid>                
                <Grid>
                    <Box width={500}>
                   <Typography sx={{paddingLeft:'10px',fontSize:'20px'}} component='span'> <Typography variant='h6' component='span' sx={{fontSize:'40px'}}>Chicken biryani</Typography>is an aromatic, flavorful Indian rice dish made with tender chicken, basmati rice, and a rich blend of spices and herbs. It is a popular, special-occasion meal that involves layering partially cooked rice over marinated chicken and slow-cooking (known as the "dum" method) to meld the flavors. </Typography>
                </Box>
                
                </Grid>

            </Grid>
           </Box>

           <Box paddingTop={10} paddingLeft={30}>
             <Grid container justifyContent="space-between" alignItems="center">
              <Grid>
                  <img src="src\Food\puliyodarai.jpeg" alt="Puliyodarai" />
               </Grid>
               <Grid>
                <Box width={500}>
                 <Typography component='span'  sx={{fontSize:'20px'}}> <Typography component='span' variant='h6' sx={{fontSize:'40px', }} >Puliyodarai </Typography>is a popular and delicious South Indian dish made from tamarind, spices and rice; it is popular as a temple offering, the name is derived from tamarind + orai (cooked rice), and can be easily prepared at home, especially in the temple style, where tamarind is made into Puli Kaachal and mixed with rice. </Typography>
                </Box>
               </Grid>
              </Grid>
            </Box>

          <Typography variant='h4'component='span'  >What is the most famous Indian food?</Typography>

          <Typography component='span' paddingLeft={10}  sx={{ fontSize:'20px'}}> Some of the most popular foods in India include Biryani, Samosas, and Butter Chicken, which are popular across the country and internationally. Regional favorites like Dosa and Idli from the South, and street food like Pani Puri and Vada Pav are also highly popular. </Typography>

          <Typography  variant='h4'component='span'>Popular dishes across India</Typography>
          <Typography paddingLeft={10} component='span' ><Typography  variant='h6' component='span'>Biryani:</Typography> A layered rice dish with meat or vegetables, spices, and saffron, with many regional variations.</Typography>
          <Typography paddingLeft={10} component='span' > <Typography variant='h6' component='span'> Samosas:</Typography> Triangular pastries filled with spiced potatoes, peas, or other savory fillings.</Typography>
          <Typography paddingLeft={10} component='span' > <Typography variant='h6' component='span'> Butter Chicken:</Typography> Tender chicken cooked in a creamy, spiced tomato sauce, a dish often associated with North Indian cuisine. </Typography>
          <Typography paddingLeft={10} component='span' > <Typography variant='h6' component='span'> Naan:</Typography>A leavened, oven-baked flatbread often served with curries. </Typography>
          <Typography paddingLeft={10} component='span' > <Typography variant='h6' component='span'> Dosa and Idli:</Typography> South Indian staples, the dosa is a crispy crepe and idli is a steamed rice cake, often served with sambar and chutney.  </Typography>
          <Typography paddingLeft={10} component='span' > <Typography variant='h6' component='span'> Pani Puri (or Golgappa):</Typography> A popular street food consisting of crispy hollow balls filled with spiced water, mashed potatoes, and chickpeas. </Typography>
          <Typography paddingLeft={10} component='span' > <Typography variant='h6' component='span'> </Typography> </Typography>
          <Typography paddingLeft={10} component='span' > <Typography variant='h6' component='span'>Drinks: </Typography> Lassi (yogurt drink).</Typography>

          <Box paddingTop={10} paddingLeft={10} height={1100} sx={{backgroundColor:'black'}}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid>
                <img src="src\Food\dosa.jpeg" alt="Dosa"  width={300}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'130px',color:'white'}} > Dosa</Typography>
              </Grid>
               <Grid>
                <img src=" src\Food\Mutton Briyani.jpg" alt=" Mutton Briyani"  width={300}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'100px',color:'white'}} >Mutton Biryani</Typography>
              </Grid>
               <Grid>
                <Box width={300}>
                <img src="src\Food\desert.jpg " alt=" Deseart"  width={290}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'80px',color:'white'}} >Indian Desserts </Typography>
                </Box>
              </Grid>
              <br />
              <br />
               <Grid>
                <img src="src\Food\somosa.jpg " alt=" samosa"  width={300}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'100px',color:'white'}} >Samosa </Typography>
              </Grid>
              
              <Grid>
                <img src="src\Food\veg dish.jpeg " alt=" "  width={300}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'130px',color:'white'}} > Chana Masala</Typography>
              </Grid>
              <Grid>
                <img src=" src\Food\tea.jpeg " alt="Tea "  width={400}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'130px',color:'white'}} > Chai (Tea)</Typography>
              </Grid>
              <Grid>
                <img src="src\Food\indain food.jpg " alt="  indain Food"  width={400}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'130px',color:'white'}} > Maharaja Thali</Typography>
              </Grid>
              <Grid>
                <img src=" src\Food\Fish curry.jpg" alt=" Fish Curry" style={{paddingRight:'140px'}}  width={400}/>
                <br />
                <Typography variant='h6' component= 'span' sx={{paddingLeft:'130px',color:'white'}} >Fish Curry </Typography>
              </Grid>
              
            </Grid>
          </Box>

          <Typography variant='h4' component='span'sx={{paddingTop:'20px'}} > Fine dining and modern Indian</Typography>

           <Typography paddingLeft={10} component='span'><Typography variant='h6' component='span'> <Link href=" https://www.indianaccent.com/newdelhi" target="_blank" >  Indian Accent (New Delhi)</Link>:</Typography> Known for a modern take on Indian cuisine, this restaurant has repeatedly won top awards.
           </Typography>

           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href="https://www.masquerestaurant.com/" target="_blank" > Masque (Mumbai):</Link> </Typography> Focuses on hyperlocal and foraged ingredients, offering a unique and daring menu.  </Typography>
           
           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href=" https://www.chennaimaratha.com/" target="_blank" > Chennai Maratha: </Link> </Typography>Blends contemporary South Indian food with a modern twist on traditional flavors and ingredients.</Typography>
           
           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href=" https://www.foodparadaise.com/" target="_blank" >Food Paradice (Pondicherry): </Link> </Typography> Food Paradise is a popular, value-for-money restaurant in Pondicherry known for its authentic North Indian, South Indian Food</Typography>
           
           <Typography paddingLeft={10} component='span'> <Typography variant='h6' component='span'><Link href=" " target="_blank" > </Link> </Typography> </Typography>

     
        </Stack>

    </Container>
  )
}

export default Content