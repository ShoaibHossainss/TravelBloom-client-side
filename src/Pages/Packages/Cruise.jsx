import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Cruise = () => {
    const [items,setItem] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/touristSpot')
        .then(res=>res.json())
        .then(data=>{
            setItem(data.filter(item=>item.tour_type==='Cruise'))
        
   
        })
    },[])
    return (
        <div>
        {
            items.map(p=>
                <div key={p._id} className="card bg-base-100 w-96 shadow-xl">
                <figure>
                <img className='relative'
                  src={p.primary_image}
                  alt="Shoes"/>
                </figure>
              <div className="card-body">
              <h2 className="card-title">Type: {p.tour_type}</h2>
                <p>Title: {p.trip_title}</p>
                <p>Price: {p.price}</p>
                <div className="card-actions flex gap-4">
                  <button className="btn btn-primary">View Package</button>
                  <Link to='/'>
      <button className="btn btn-primary">Go Back</button>
      </Link>
                </div>
              </div>
            </div>
            )
        }
    </div>
    );
};

export default Cruise;