import React, { useState } from 'react'
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { oderData } from '../Feature/BuySlicer';

const Buy = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber:'',
    address:'',
    password: '',
  });
  const dispatch=useDispatch()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(oderData(formData))
    alert(` ${formData.name} Your oder is placed , it reacch your door soon ${console.log('Form submitted:', formData)}`);
    
    
    
    setFormData({ name: '', phoneNumber:'', address:'',email: '', password: '' } , );
  };
  return (
    <>

    <Container sx={{ paddingTop:"70px" }}>
    <Box  paddingTop={20}
      component="form" 
      
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        maxWidth: 400, 
        margin: 'auto', 
        p: 3, 
        border: '1px solid #ccc', 
        borderRadius: '8px' ,
       
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Place Odaer
      </Typography>
      <TextField
        label="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Mobile Number"
        name="phoneNumber"
        type="number"
        value={formData.phoneNumber}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Adress"
        name="address"
        type="text"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        required
      />
      
      <Button type="submit" onClick={handleSubmit} variant="contained" color="primary">
        Submit
      </Button>
    </Box>

    </Container>
    </>
  )
}

export default Buy