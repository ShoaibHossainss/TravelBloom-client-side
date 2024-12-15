
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";

const TourGuide = () => {
  const axiosPublic = useAxiosPublic();
  const [bounceStyle, setBounceStyle] = useState({});

  useEffect(() => {
    Aos.init({
     duration: 1000,
     once: false
    })
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

 const {data: guide = []} = useQuery({
  queryKey: ['guide'],
  queryFn: async () => {
    const res = await axiosPublic.get('/tourGuides')
    return res.data
  }
 })
  return (
    <div>
      <h3 className="text-center text-xl mb-6 text-lime-700 dark:text-lime-300">
        Meet the heart of our travel experience – our expert tour guides. <br />
        Passionate about sharing the wonders of Bangladesh, they bring the country’s rich history to life. <br />
        Let them lead you through the beauty of Bangladesh with local insights and a personalized touch.
      </h3>
      <div className="lg:ml-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto lg:gap-6">
        {guide.map((p) => (
          <div
            key={p._id}
            style={bounceStyle}
            data-aos='fade-up'
            className="card md:w-96 dark:bg-base-800 bg-gradient-to-bl from-orange-200 via-yellow-300 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-xl text-yellow-800 dark:text-yellow-300 hover:bg-teal-200 dark:hover:bg-teal-600 mb-10"
          >
            <figure>
              <img className="relative" src={p.profilePicture} alt="Tour Guide" data-aos='zoom-in'/>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-rose-800 hover:text-pink-900" data-aos='fade-right'>Name: {p.name}</h2>
              <p className="text-pink-800 hover:text-orange-900" data-aos='fade-right'>Email: {p.email}</p>
              <p className="text-orange-800 hover:text-red-700" data-aos='fade-right'>Phone: {p.phone}</p>
              <p className="text-yellow-800 hover:text-red-700" data-aos='fade-right'>Address: {p.address}</p>

              <Link to={`/tourGuide-details/${p._id}`}>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-600 border-none" data-aos='fade-up'>
                    Details
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuide;
