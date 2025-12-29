import React from 'react'
import { Box, Container, List, ListItem, ListItemText, Stack, Typography } from '@mui/material'

import Fotter from '../Components/Fotter';

const CRnative = () => {
  return (
    <>
    <Container  sx={{ display:'flex', justifyContent:'center', alignItems:'center',width:'800px', paddingBottom:'100px' }} >
        <Box>
        <Stack spacing={2}>

        

                    <Box paddingTop={15}>

               <Typography   sx={{ display:'flex',justifyContent:'center',fontWidth:'1000px'}} variant='h2'>React  Native </Typography>
               <Typography   sx={{ display:'flex',justifyContent:'center',padding:'20px'}} variant='h4'>Key Trends & Expected Versions in 2026 </Typography>

               </Box>

               <Box>

          
                <Typography variant='body2' component='p' sx={{
                       fontWeight: 300,
                       color: '#555',
                       fontSize: '14px',
                       paddingTop:'10px'

                }} > React Native is an open-source framework developed by Meta for building cross-platform mobile applications using   <Typography variant='p' component='span' sx={{
                       fontWeight: 300,
                       color: '#555',
                       fontSize: '14px',
                       paddingLeft:'40px'

                }} >  JavaScript and React. It enables developers to create natively rendered mobile apps for iOS and  <Typography variant='body2' component='span' sx={{
                       fontWeight: 300,
                       color: '#555',
                       fontSize: '14px',
                       paddingLeft:'200px'

                }} > Android from a single codebase. </Typography> </Typography>  </Typography>
            

              </Box>

              <Box >

                <img src="src\assets\react.jpg" alt=" React Native"  style={{width:'100%',padding:'20PX'}} />
              </Box>


            
           <Box sx={{ padding:'10px'}}>

            <Typography variant='h3' component='span'>Key Features and Concepts:</Typography>
           
           <List sx={{ listStyleType: 'disc', pl: 4 }}> 
             
               <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="Cross-Platform Development:" />
               </ListItem>

               <Typography paddingLeft={5} component='span' > React Native allows developers to write the majority of their code once and deploy it on both iOS and Android, significantly reducing development time and effort compared to building separate native applications.</Typography>
               
               <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText primaryTypographyProps={{ fontWeight: 'bold' }}  primary="Native UI Components:" />
               </ListItem>

               <Typography paddingLeft={5}  component='span'  > Unlike frameworks that rely on webviews, React Native renders actual native UI components. This ensures that applications built with React Native have the look, feel, and performance of a truly native application.  </Typography>
               
                <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }} primary="JavaScript and React:" />
               </ListItem>

               <Typography paddingLeft={5}  component='span'  >  Developers leverage their knowledge of JavaScript and the React library to define the application's UI and logic. JSX, an XML-like syntax, is used to describe the UI components. </Typography>


                <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}   primary="The Bridge:" />
               </ListItem>

               <Typography paddingLeft={5} component='span' >A core concept in React Native is the "bridge," which facilitates communication between the JavaScript code and the native platform APIs (Objective-C/Swift for iOS, Java/Kotlin for Android). This allows React Native apps to access device features like the camera, location services, and more. </Typography>

                <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText   primaryTypographyProps={{ fontWeight: 'bold' }}  primary="Hot Reloading:" />
               </ListItem>

               <Typography paddingLeft={5}  component='span' > This feature accelerates development by allowing developers to see the effects of code changes instantly without needing to recompile and redeploy the entire application. </Typography>



                <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="Open Source and Community-Driven:" />
               </ListItem>

               <Typography paddingLeft={5} component='span'  > React Native is an open-source project, fostering a large and active community that contributes to its development and provides extensive resources and support. </Typography>


                <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText   primaryTypographyProps={{ fontWeight: 'bold' }}  primary="Ecosystem:" />
               </ListItem>

               <Typography paddingLeft={5}  component='span' > React Native benefits from a rich ecosystem of libraries and tools, including UI kits like React Native Elements, and development environments like Expo CLI, which simplify setup and development.  </Typography>


           </List>

          </Box>

          <Box >

                <img src="src\assets\ppp.jpg" alt=" React Native"  style={{width:'100%',padding:'20PX'}} />
           </Box>

           <Box sx={{ padding:'10px'}}>

            <Typography variant='h4'  component='span'>Benefits of using React Native:</Typography>

            <List>

                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary="Code Reusability:" />
               </ListItem>

               <Typography  paddingLeft={5} component='span'  > Write once, run on multiple platforms. </Typography>

                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}   primary=" Faster Development:   " />
               </ListItem>

               <Typography  paddingLeft={5} component='span'  > Single codebase and features like hot reloading streamline the development process.  </Typography>

                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText   primaryTypographyProps={{ fontWeight: 'bold' }}    primary=" Cost-Effective: " />
               </ListItem>

               <Typography  paddingLeft={5} component='span'  >  Reduced development and maintenance costs compared to separate native apps.  </Typography>

                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText  primaryTypographyProps={{ fontWeight: 'bold' }}  primary=" Native Performance and Experience: " />
               </ListItem>

               <Typography  paddingLeft={5}  component='span' >  Apps feel and perform like native applications.  </Typography>

                 <ListItem sx={{ display: 'list-item', paddingY: 0.5, paddingX: 0 }}>
                 <ListItemText   primaryTypographyProps={{ fontWeight: 'bold' }}   primary=" Large Developer Community: " />
               </ListItem>

               <Typography  paddingLeft={5} component='span'  >  Access to a vast pool of resources and support.  </Typography>


                 

            </List>

           </Box>

           <Typography variant='h4'  component='span'>Companies Utilizing React Native:</Typography>

           <Typography paddingLeft={5}   > Many prominent companies, including Facebook, Instagram, Tesla, Walmart, Discord, and Microsoft, utilize React Native for their mobile applications, either entirely or in part.</Typography>

      

      </Stack>
      </Box>


    </Container>

     <Fotter />

    </>
  )
}

export default CRnative