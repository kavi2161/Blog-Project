
import React, { useState } from 'react'
import { TextField, Button, Box, Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../Feature/UserSlice';

const Post1 = () => {
    const dispatch=useDispatch()
    const [comment, setComment] = useState('');

    const handleSubmit = () => {

         dispatch(getComments(comment));
             return setComment('') 
  };
  const comments=useSelector((state)=>state.comment.comment)
    console.log(comments,'check');

  return (
   <>
   <Box sx={{display:'flex',justifyContent:'center'}}>
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
          variant="contained"
          color="primary"
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
   </>
  )
}

export default Post1