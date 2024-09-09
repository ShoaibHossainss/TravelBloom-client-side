import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <div className='bg-teal-500 lg:w-[1330px]  md:w-full w-full mx-auto'>
    <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
  </div>
  
)
