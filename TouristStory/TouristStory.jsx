
import { Link } from "react-router-dom";
import useAxiosPublic from "../src/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


const TouristStory = () => {
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


    const axiosPublic = useAxiosPublic()
    const {data: touristStory=[],} = useQuery({
      queryKey: ['touristStory'],
      queryFn: async () => {
        const res = await axiosPublic.get('/touristStory')
        return res.data
      }
    })
    return (
        <div className="dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 dark:text-white">
          <h1 className="text-3xl text-center mb-2">Tourist Story Section</h1>
          <h3 className="text-center text-xl mb-6 text-lime-700 dark:text-lime-300">
  Every journey has a story, and every story deserves to be shared. <br />
  In this section, explore firsthand experiences of travelers who have ventured into the heart of Bangladesh. <br />
  From thrilling adventures in the Sundarbans to serene moments on the beaches of Cox’s Bazar, these stories capture the essence of discovery, culture, and unforgettable memories.
</h3>

<div className="mx-auto md:ml-8 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-4">
      {touristStory.map((p) => (
        <Link to={`/touristStory-details/${p._id}`} key={p._id}>
          <div
            style={bounceStyle}
             className="card dark:bg-base-800 bg-gradient-to-bl from-orange-200 via-yellow-300 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-xl text-yellow-800 dark:text-yellow-300 hover:bg-teal-200 dark:hover:bg-teal-600"
          >
            <figure>
              <img className="relative" src={p.imageUrl} alt="Tourist Story" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-rose-800 hover:text-pink-900">
                Type: {p.type}
              </h2>
              <p className="text-pink-800 hover:text-orange-900">Title: {p.title}</p>
              <p className="text-orange-800 hover:text-red-700">Location: {p.location}</p>
              <p className="text-yellow-800 hover:text-red-700">Experience: {p.experience}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
      <Link to={'/all-touristStory'}>
      <div className="flex justify-center mx-auto mt-4">
      <button className="btn text-white bg-orange-500 border-none hover:bg-orange-600">All Story</button>
      </div>
           
         </Link>
         
        </div>
    );
};

export default TouristStory;

