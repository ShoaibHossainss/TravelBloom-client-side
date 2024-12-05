import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TouristStory = () => {
    const [touristStory,setTouristStory] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-12-server-lac-ten.vercel.app/touristStory')
        .then(res=>res.json())
        .then(data=>setTouristStory(data))
    },[])
    console.log(touristStory)
    return (
        <div>
              <div className="mx-auto lg:ml-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6">
        {
          touristStory.map(p=>
            <Link to={`/touristStory-details/${p._id}`} key={p._id}>
              <div  className="card bg-base-100 mb-4 shadow-xl">
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
        
        
        
        
      </div>
    </div>
    </Link>
          )
        }  
      </div>
      <Link to={'/all-touristStory'}>
      <div className="flex justify-center mx-auto mt-4">
      <button className="btn btn-primary">All Story</button>
      </div>
           
         </Link>
        </div>
    );
};

export default TouristStory;

