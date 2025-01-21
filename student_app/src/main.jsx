import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



import Login from './views/Login'
// route
const Home = lazy(()=>import('./views/Home'))
import {  createBrowserRouter,RouterProvider } from "react-router-dom";
import { decrypt } from './config/crypto'
import { authCheck, loadTaskVocab } from './config/loader'
import PageError from './views/PageError'

const router = createBrowserRouter([
  {path:'/',Component:Login},
  {path:'/page_error',Component:PageError},
  {path:'/student',children:[
    {path:'',Component:Home,loader:authCheck}
  ],loader:authCheck}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
