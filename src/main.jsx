import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <div className='bg-teal-500 lg:w-[1330px]  md:w-full w-full mx-auto'>
    <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
   <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
  </div>
  
)
