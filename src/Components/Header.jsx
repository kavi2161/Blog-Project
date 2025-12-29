import { Search } from '@mui/icons-material';
import { AppBar, Box, Button, Container, createTheme, Toolbar, Typography } from '@mui/material'

import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase';
import React from 'react'
import { lime } from '@mui/material/colors';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import  myLogo  from '../assets/logo-svg.svg'

const Header = () => {
  const location = useLocation();

  const noAppBarPaths = '/login';

  const showAppBar = location.pathname !==noAppBarPaths 



  const navigate=useNavigate()


  

  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
   
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 10,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(12),
    width: 'auto',
  },
}));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0,2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
 
}));
   const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

  return (
    <>
    {showAppBar && (
    <AppBar position="sticky" sx={{backgroundColor:'white'}} > 

    
        <Toolbar>

          <Box  component='img'  sx={{ height: 80, marginRight: 2 }} alt="My Company Logo" src={myLogo} />
            {/* <Typography
            variant="h6"
            noWrapWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'Black',
              textDecoration: 'none',
            }}
          >
            BLOGGING
          </Typography> */}

          
          
              <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
           
              <Button sx={{ my: 1, color: 'black', display: 'block' , }} onClick={()=>navigate('/dashbord')}  > Dash Bord
              
              </Button>
         
          
           
              <Button sx={{ my: 1, color: 'black', display: 'block', }}  onClick={()=>navigate('/home')} > Home
              
              </Button>
         
          


              

          <Search sx={{color:'black'}} >
            <SearchIconWrapper sx={{color:'black'}}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              sx={{color:'black',}}
            />
          </Search>
          </Box>

          <Box>
          <Button  variant='contained' sx={{ my: 1, color: 'white', borderRadius:"100px"  }} onClick={()=>navigate('/signup')} > Sign-up </Button>

        </Box>
        </Toolbar>

    
    
    </AppBar>

      )}

        <main>
        <Outlet />
      </main>

    </>
  )
}

export default Header