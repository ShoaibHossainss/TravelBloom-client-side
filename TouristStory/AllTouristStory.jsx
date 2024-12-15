
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../src/Pages/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
import Aos from "aos";
import "aos/dist/aos.css";


const AllTouristStory = () => {
  const touristStory = useLoaderData();
  const [allStory, setAllStory] = useState(touristStory);

  useEffect(() => {
    setAllStory(touristStory);
  }, [touristStory]);
  
  const [bounceStyle, setBounceStyle] = useState({});
  useEffect(() => {
    Aos.init({
          duration: 1000, // Animation duration in ms
          once: false, // Whether animation should happen only once
        });
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

  return (
    <div className="dark:text-white">
      <Helmet>
        <title>All Story</title>
      </Helmet>
      <Navbar />
      <div className="mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-4 md:mt-10 mt-4">
        {allStory.map((p) => (
          <div
            key={p._id}
            style={bounceStyle}
            data-aos="fade-up"
            className="card bg-base-100 bg-gradient-to-bl from-orange-200 via-yellow-300 to-pink-200 shadow-xl text-yellow-800 hover:bg-teal-200 mb-6 dark:bg-gradient-to-bl dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-yellow-300"
          >
            <figure>
              <img className="relative" src={p.imageUrl} alt="Shoes" data-aos="zoom-in"/>
            </figure>

            <div className="card-body">
              <h2 className="card-title text-rose-800 hover:text-pink-900" data-aos="fade-right">
                Type: {p.type}
              </h2>
              <p className="text-pink-800 hover:text-orange-900" data-aos="fade-right">Title: {p.title}</p>
              <p className="text-orange-800 hover:text-red-700" data-aos="fade-right">Location: {p.location}</p>
              <p className="text-yellow-800 hover:text-red-700" data-aos="fade-right">Experience: {p.experience}</p>
              <Link to={`/touristStory-details/${p._id}`}>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-600 border-none" data-aos="fade-up">
                    View Details
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="card-actions justify-center mb-4 mt-4">
        <Link to="/">
          <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-600 border-none">
            Go Back
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default AllTouristStory;
