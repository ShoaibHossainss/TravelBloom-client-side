import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const TourGuide = () => {
    const [tourGuide,setTourGuide] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-12-server-lac-ten.vercel.app/tourGuides')
        .then(res=>res.json())
        .then(data=>setTourGuide(data))
    },[])
    console.log(tourGuide)
    return (
        <div className="lg:ml-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto lg:gap-6 ">
          {
            tourGuide.map(p=>
                <div key={p._id} className="card lg:w-96 md:w-96 bg-base-100 shadow-xl mb-4">
          <figure>
          <img className='relative'
            src={p.profilePicture}
            alt="Shoes"/>
          </figure>
        <div className="card-body">
        <h2 className="card-title">Name: {p.name}</h2>
          <p>Email: {p.email}</p>
          <p>Phone: {p.phone}</p>
          <p>Address: {p.address}</p>
          
         <Link to={`/tourGuide-details/${p._id}`}>
         <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
         </Link>
        </div>
      </div>
            )
          }  
        </div>
    );
};

export default TourGuide;