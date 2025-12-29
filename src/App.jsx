import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import  Dashboard  from './pages/Dashbord'
import About from './pages/About'
import Project from './pages/Project'
import SignIn from './pages/SignIn'
import SignUp from './pages/SinUp'
import Header from './Components/Header'
import Post from './Components/Post'
import Note from './Note/Note'
import Buy from './Note/Buy'
import FoodPage from './Food/FoodPage'
import Riverpage from './River/Riverpage'
import SinUp from './pages/SinUp'
import Dummy from './Dummy'
import CRnative from './Content/CRnative'

import CNote from './Content/CNote'
import  CFood  from './Content/CFood'
const App = () => {
  
  return (
    <BrowserRouter basename="/Blog-Project/" >    
     
      <Routes>
        <Route path='/'  element={<Header/>} >
      <Route path='/home'  element={<Home/>} />
      <Route path='/dashbord'  element={<Dashboard/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/project'  element={<Project/>} /> 
      <Route path='/signin'  element={<SignIn/>} />
      <Route path='/post'  element={<Post/>} />
      <Route path='/note'  element={<Note/>} />
      <Route path='/buy'  element={<Buy/>} />
      <Route path='/food'  element={<FoodPage/>} />
      <Route path='/river'  element={<Riverpage/>} />
      <Route path='/react'  element={<CRnative/>}  />
      <Route path='/ABC'  element={<CNote/>}  />
      <Route path='/ifood'  element={<CFood/>}  />
      
      
      
         </Route>

         
         <Route index element={< Dummy />} />

         <Route path='/signup'  element={<SinUp/>} />

         
        
       
      
      
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
