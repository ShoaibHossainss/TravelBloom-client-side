
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../../Footer/Footer";
import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import Aos from "aos";

const AllPackage = () => {
  const packages = useLoaderData();
  const [allPackage, setAllPackage] = useState(packages);
  const [bounceStyle, setBounceStyle] = useState({});

  useEffect(() => {
    setAllPackage(packages);
  }, [packages]);

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

  return (
    <div className="dark:text-white">
      <Helmet>
        <title>All Packages</title>
      </Helmet>
      <Navbar />
      <div className="grid md:grid-cols-3 grid-cols-1 mx-auto w-full md:gap-10 md:mt-10 mt-4 gap-4">
  {allPackage.map((p) => (
    <div
      key={p._id}
      style={bounceStyle}
      data-aos='fade-up'
      className="card bg-base-200 dark:bg-base-800 bg-gradient-to-bl from-orange-200 via-yellow-300 to-pink-200 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-xl text-yellow-800 dark:text-yellow-300 mb-4 hover:bg-teal-200 dark:hover:bg-teal-600"
    >
      <figure>
        <img className="relative" src={p.primary_image} alt="Package" data-aos='zoom-in'/>
      </figure>
      <FaRegHeart className="btn w-[50px] top-0 -right-0 absolute bg-red-700 border-none hover:bg-red-500 dark:bg-red-600 dark:hover:bg-red-500" />
      <div className="card-body">
        <h2 className="card-title text-rose-800 hover:text-pink-900 dark:text-rose-300 dark:hover:text-pink-400" data-aos='fade-right'>
          Type: {p.tour_type}
        </h2>
        <p className="text-pink-800 hover:text-orange-900 dark:text-pink-300 dark:hover:text-orange-400" data-aos='fade-right'>
          Title: {p.trip_title}
        </p>
        <p className="text-orange-800 hover:text-red-700 dark:text-orange-300 dark:hover:text-red-500" data-aos='fade-right'>
          Price: {p.price}
        </p>
        <Link to={`/package-details/${p._id}`}>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 border-none" data-aos='fade-up'>
              View Package
            </button>
          </div>
        </Link>
      </div>
    </div>
  ))}
</div>

      <div className="card-actions justify-center mb-4">
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

export default AllPackage;
