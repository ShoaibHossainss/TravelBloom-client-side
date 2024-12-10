import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../src/Pages/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";


const AllTouristStory = () => {
    const touristStory = useLoaderData()
    const [allStory,setAllStory] = useState(touristStory)
    useEffect(()=>{
        setAllStory(touristStory);
      },[touristStory])
      console.log(touristStory)
    return (
        <div>
          <Helmet>
                <title>All Story</title>
            </Helmet>
            <Navbar></Navbar>
           <div className="mx-auto grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-4 md:mt-10 mt-4">
           {
                allStory.map(p=> <div key={p._id} className="card bg-base-100 shadow-xl hover:bg-teal-200">
                    <figure>
                    <img className='relative'
                      src={p.imageUrl}
                      alt="Shoes"/>
                    </figure>
                   
                   
                    
                  <div className="card-body">
                  <h2 className="card-title">Type: {p.type}</h2>
        <p>Title: {p.title}</p>
        <p>Location: {p.location}</p>
        <p>Experience: {p.experience}</p>
                   <Link to={`/touristStory-details/${p._id}`}>
                   <div className="card-actions justify-end">
                      <button className="btn btn-primary">View Details</button>
                    </div>
                   </Link>
                  </div>
                </div>)
            }
           </div>
           <div className="card-actions justify-center mb-4 mt-4">
                  <Link to='/'>
      <button className="btn btn-primary">Go Back</button>
      </Link>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default AllTouristStory;