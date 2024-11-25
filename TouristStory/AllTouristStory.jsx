import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../src/Pages/Navbar";
import { useEffect, useState } from "react";


const AllTouristStory = () => {
    const touristStory = useLoaderData()
    const [allStory,setAllStory] = useState(touristStory)
    useEffect(()=>{
        setAllStory(touristStory);
      },[touristStory])
      console.log(touristStory)
    return (
        <div>
            <Navbar></Navbar>
           <div className="mx-auto grid grid-cols-3 gap-10 mt-10">
           {
                allStory.map(p=> <div key={p._id} className="card bg-base-100 w-96 shadow-xl">
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
           <div className="card-actions justify-center">
                  <Link to='/'>
      <button className="btn btn-primary">Go Back</button>
      </Link>
                </div>
        </div>
    );
};

export default AllTouristStory;