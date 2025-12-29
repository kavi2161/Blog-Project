import { AlignHorizontalCenter, Gradient } from '@mui/icons-material'
import { Box, Button, Container, TextField, Typography } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../Feature/UserSlice';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Post1 from './Post1';
import Fotter from './Fotter';


const Post = () => {
    const dispatch=useDispatch()
  const navigate=useNavigate()
    const [comment, setComment] = useState('');

    const addComment=()=>{
    dispatch(getComments(comment));
     return setComment('')
    
  }

   const comments=useSelector((state)=>state.comment.comment)
    console.log(comments,'check');
    

  return (
    <>
    <Container  sx={{
      paddingBottom:'50px'
    }}>
    <Box sx={{padding:'10px',}}>
    <Box  sx={{padding:'10px',display:'flex',justifyContent:'center',
        alignItems:'center'
    }}>
        <Typography  className='gradient-text' variant='h2'>React Native </Typography>
    </Box>
    <Box sx={{padding:'10px',display:'flex',justifyContent:'center',}}>
    <img src="src\assets\react.jpg" alt=" Reactive native" width={600} height={400}   />
    </Box>
    
    <br/>
    <Typography variant='body1'>React Native is an open-source framework developed by Meta for building cross-platform mobile applications using JavaScript and React. It enables developers to create natively rendered mobile apps for iOS and Android from a single codebase. <br />
<Typography variant='h3' component='span'>Key Features and Concepts:</Typography><br />
Cross-Platform Development: React Native allows developers to write the majority of their code once and deploy it on both iOS and Android, significantly reducing development time and effort compared to building separate native applications.
Native UI Components: Unlike frameworks that rely on webviews, React Native renders actual native UI components. This ensures that applications built with React Native have the look, feel, and performance of a truly native application.
JavaScript and React: Developers leverage their knowledge of JavaScript and the React library to define the application's UI and logic. JSX, an XML-like syntax, is used to describe the UI components.
The "Bridge": A core concept in React Native is the "bridge," which facilitates communication between the JavaScript code and the native platform APIs (Objective-C/Swift for iOS, Java/Kotlin for Android). This allows React Native apps to access device features like the camera, location services, and more.
Hot Reloading: This feature accelerates development by allowing developers to see the effects of code changes instantly without needing to recompile and redeploy the entire application.
Open Source and Community-Driven: React Native is an open-source project, fostering a large and active community that contributes to its development and provides extensive resources and support.
Ecosystem: React Native benefits from a rich ecosystem of libraries and tools, including UI kits like React Native Elements, and development environments like Expo CLI, which simplify setup and development.<br />
<Typography variant='h4'  component='span'>Benefits of using React Native:</Typography><br />

        <img src="src\assets\p.s2.jpeg" alt=" Reactive native" width={300} height={200} sx={{padding:'10px',display:'flex',justifyContent:'center',}}  />
        <img src="src\assets\p.s1.jpeg" alt=" Reactive native" width={300} height={200} sx={{padding:'10px',display:'flex',justifyContent:'center',}}  />
        <img src="src\assets\p.s3.jpeg" alt=" Reactive native" width={300} height={200}  sx={{padding:'10px',display:'flex',justifyContent:'center',}} /><br/>

    
Code Reusability: Write once, run on multiple platforms.
Faster Development: Single codebase and features like hot reloading streamline the development process.
Cost-Effective: Reduced development and maintenance costs compared to separate native apps.
Native Performance and Experience: Apps feel and perform like native applications.
Large Developer Community: Access to a vast pool of resources and support.<br />
<Typography variant='h4' component='span' >Companies Utilizing React Native:</Typography><br />
Many prominent companies, including Facebook, Instagram, Tesla, Walmart, Discord, and Microsoft, utilize React Native for their mobile applications, either entirely or in part. </Typography>
    
    </Box>
    {/* <Box>
        <TextField  onChange={(e)=>{setComment(e.target.value)}}/>
            <p>{comments}</p>
        <Button onClick={addComment}>comment</Button>
    </Box> */}

    <Post1/>
    
    </Container>

    <Fotter />

    
    </>
  )
}

export default Post