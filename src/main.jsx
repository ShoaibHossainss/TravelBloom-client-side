import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";


createRoot(document.getElementById('root')).render(
  <div className='bg-[#aba98c] lg:w-[1330px]  md:w-full w-full mx-auto'>
    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </div>
  
)
