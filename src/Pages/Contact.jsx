import React from 'react';
import email from '../assets/email-8-svgrepo-com.svg'
import mobile from '../assets/mobile-svgrepo-com.svg'
import location from '../assets/location-pin-svgrepo-com.svg'
import Form from './Form';
import Navbar from './Navbar';
import Footer from '../../Footer/Footer';
import { Helmet } from 'react-helmet-async';


const Contact = () => {
    return (
        <div>
             <Helmet>
                    <title>Contact</title>
                </Helmet>
            <Navbar></Navbar>
            <div className='md:flex md:gap-6 gap-4 '>
       <div className='mx-auto justify-center md:w-[600px] md:pt-6 mt-6 mb-6'>
        <h1 className='mt-4 mb-5 text-center text-3xl'>Contact Info</h1>
            <div>
          <div className='flex items-center justify-center mx-auto text-center gap-4 mb-4'>
           <img className='w-[40px]' src={email} alt="" />
           <div>
            <h1 className='text-teal-700 font-bold'>EMAIL:</h1>
            <h3 className='font-bold'>info@travelbloom.com</h3>
           </div>
          </div>
          <div className='flex items-center justify-center mx-auto text-center gap-4 mb-4'>
            <img className='w-[40px] mr-10' src={mobile} alt="" />
           <div className='-translate-x-4'>
            <h1 className='text-teal-700 font-bold'>MOBILE:</h1>
            <h3 className='font-bold'>+8801628485310</h3>
           </div>
          </div>
          <div className='flex items-center justify-center mx-auto text-center gap-4 mb-4'>
           <img className='w-[40px] ml-4' src={location} alt="" />
           <div>
            <h1 className='text-teal-700 font-bold'>LOCATION:</h1>
            <h3 className='font-bold'>Chattogram, Bangladesh</h3>
           </div>
          </div>
            </div>
            <h1 className='text-center text-3xl'>Social Media</h1>
        <div className='flex gap-4 justify-center -mt-4'>
        <a href="https://www.facebook.com/shoaib.hossain.167" target="_blank" rel="noopener noreferrer"><svg className='w-[35px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
</svg></a>
<a href="https://www.linkedin.com/in/shoaib-hossain-ss" target="_blank" rel="noopener noreferrer"><svg className='w-[35px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
</svg></a>
    <a href="https://github.com/ShoaibHossainss" target="_blank" rel="noopener noreferrer"><svg className='w-[30px]' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
</svg></a>
        </div>
        </div>
        <div className='mx-auto justify-center  md:w-[600px] md:pt-6 mt-6 mb-6'>
          <h1 className='text-3xl text-center'>Feel Free To Contact Us</h1>
         <Form></Form>
        </div>
       </div> 
       <Footer></Footer>
        </div>
    );
};

export default Contact;