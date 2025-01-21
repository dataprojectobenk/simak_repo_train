import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'

// import component view 
import Login from './views/Login';
import Notfound from './views/Notfound';
// lazy component
// define route web
const router = createBrowserRouter([
  {path:'/',Component:Login},
  {path:'*',Component:Notfound}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
