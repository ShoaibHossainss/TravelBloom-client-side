import React from 'react';
import Navbar from './Navbar';
import Footer from '../../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
             <Helmet>
                                <title>About</title>
                            </Helmet>
            <Navbar></Navbar>
            <div className='mt-6 mb-6'>
                <h1 className="text-3xl text-center mb-2">
                About Us  
                </h1>
                <p className="text-center text-xl mb-6 text-lime-700 dark:text-lime-300">
Welcome to TravelBloom, your ultimate companion for exploring the breathtaking beauty and rich cultural heritage of Bangladesh. At TravelBloom, we aim to connect travelers with the most captivating destinations and experiences that this vibrant country has to offer. Whether you are seeking thrilling adventures, serene retreats, eco-tourism opportunities, or a deep dive into the traditions and history of Bangladesh, TravelBloom has something for everyone.  

Our mission is to inspire and guide travelers in uncovering the hidden gems of Bangladesh while promoting sustainable tourism and fostering a greater appreciation for the country’s diverse heritage. From adrenaline-filled treks and wildlife exploration to tranquil beaches and vibrant festivals, we strive to provide authentic and unforgettable experiences for every type of traveler. TravelBloom is more than just a website; it’s a journey to discover the heart and soul of Bangladesh.
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;