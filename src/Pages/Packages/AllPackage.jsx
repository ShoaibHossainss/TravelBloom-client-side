import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../../Footer/Footer";



const AllPackage = () => {
    const packages = useLoaderData()
    const [allPackage,setAllPackage] = useState(packages)
    useEffect(()=>{
        setAllPackage(packages);
      },[packages])
      console.log(packages)
    return (
        
        <div>
            <Navbar></Navbar>
           <div className=" lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-full lg:gap-10 lg:mt-10 mt-4 gap-4">
           {
                allPackage.map(p=> <div key={p._id} className="card bg-base-100 mb-4 shadow-xl">
                    <figure>
                    <img className='relative'
                      src={p.primary_image}
                      alt="Shoes"/>
                    </figure>
                    <FaRegHeart className='btn w-[50px] top-0 -right-0 absolute bg-red-700 border-none'></FaRegHeart>
                   
                    
                  <div className="card-body">
                  <h2 className="card-title">Type: {p.tour_type}</h2>
                    <p>Title: {p.trip_title}</p>
                    <p>Price: {p.price}</p>
                   <Link to={`/package-details/${p._id}`}>
                   <div className="card-actions justify-end">
                      <button className="btn btn-primary">View Package</button>
                    </div>
                   </Link>
                  </div>
                </div>)
            }
           </div>
           <div className="card-actions justify-center mb-4">
                  <Link to='/'>
      <button className="btn btn-primary">Go Back</button>
      </Link>
                </div>
                <Footer></Footer>
        </div>
    );
};

export default AllPackage;