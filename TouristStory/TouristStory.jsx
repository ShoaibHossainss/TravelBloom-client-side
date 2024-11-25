import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TouristStory = () => {
    const [touristStory,setTouristStory] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/touristStory')
        .then(res=>res.json())
        .then(data=>setTouristStory(data))
    },[])
    console.log(touristStory)
    return (
        <div>
              <div className="mx-auto ml-8 grid grid-cols-3 gap-6">
        {
          touristStory.map(p=>
            <Link to={`/touristStory-details/${p._id}`} key={p._id}>
              <div  className="card bg-base-100 w-96 shadow-xl">
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

