import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../../Footer/Footer";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const Adventure = () => {
    const axiosPublic = useAxiosPublic();
    const [bounceStyle, setBounceStyle] = useState({});

    useEffect(() => {
     const interval = setInterval(() => {
       setBounceStyle({
         transform: "rotateY(15deg)",
         transition: "transform 0.5s ease-in-out",
       });
 
       setTimeout(() => {
         setBounceStyle({
           transform: "rotateY(0deg)",
           transition: "transform 0.5s ease-in-out",
         });
       }, 600);
     }, 2500);
 
     return () => clearInterval(interval);
   }, []);
 
    
  const {data: spot = []} = useQuery({
    queryKey: ['spot'],
    queryFn: async () => {
     const res = await axiosPublic.get('/touristSpot')
     return res.data.filter(spot=>spot.tour_type==='Adventure')
    }
  })
console.log(spot)
    return (
        <div >
          <Helmet>
                <title>Adventure</title>
            </Helmet>
          <Navbar></Navbar>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 mb-4 mx-auto justify-center">
          {
            spot.map(p=>
                <div key={p._id} style={bounceStyle} className="card bg-base-100 bg-gradient-to-bl from-orange-200 via-yellow-300 to-pink-200 shadow-xl text-yellow-800 hover:bg-teal-200 mb-6 dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-yellow-300">
                <figure>
                <img className='relative'
                  src={p.primary_image}
                  alt="Shoes"/>
                </figure>
                <div className="card-body">
  <h2 className="card-title text-rose-800 hover:text-pink-900">Type: {p.tour_type}</h2>
  <p className="text-pink-800 hover:text-orange-900">Title: {p.trip_title}</p>
  <p className="text-orange-800 hover:text-red-700">Price: {p.price}</p>
  <div className="card-actions">
    <Link to={`/package-details/${p._id}`}>
      <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-600 border-none">
        View Package
      </button>
    </Link>
  </div>
</div>

            </div>
            )
        }
          </div>
          <Link to='/'>
          <div className="flex justify-center">
          <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-600 border-none">
        Go Back
      </button>
          </div>
    </Link>
            <Footer></Footer>
        </div>
    );
};

export default Adventure;