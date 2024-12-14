import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './Provider/ThemeProvider.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <div className='bg-gradient-to-r from-teal-300 via-sky-200 to-lime-100 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 dark:text-white md:w-[1330px] w-full mx-auto'>
    <StrictMode>
   <ThemeProvider>
   <AuthProvider>
    <QueryClientProvider client={queryClient}>
   <HelmetProvider>
   <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>
   </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
   </ThemeProvider>
  </StrictMode>,
  </div>
  
)
