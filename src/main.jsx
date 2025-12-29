import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { getComments } from './Feature/UserSlice.js'
import UserSlice from './Feature/UserSlice.js'
import { Provider } from 'react-redux'
import NoteSlicer from './Feature/NoteSlicer.js'
import BuySlicer from './Feature/BuySlicer.js'
import UserSlicer from './Feature/UserSLicer.js'

export const store=configureStore({
  reducer:{
    comment:UserSlice,
    notecomment:NoteSlicer,
    oderdata:BuySlicer,
    database:UserSlicer,
  }
})




createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
