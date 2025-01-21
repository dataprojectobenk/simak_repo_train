import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Login from './views/Login'
// route
const Home = lazy(()=>import('./views/Home'))
import {  createBrowserRouter,RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {path:'/',Component:Login},
  {path:'/home',Component:Home}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
