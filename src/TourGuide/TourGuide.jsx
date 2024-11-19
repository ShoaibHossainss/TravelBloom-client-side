import { useEffect, useState } from "react";



const TourGuide = () => {
    const [tourGuide,setTourGuide] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/tourGuides')
        .then(res=>res.json())
        .then(data=>setTourGuide(data))
    },[])
    console.log(tourGuide)
    return (
        <div className="mx-auto ml-8 grid grid-cols-3 gap-6">
          {
            tourGuide.map(p=>
                <div key={p._id} className="card bg-base-100 w-96 shadow-xl">
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
          <p>Education: {p.education}</p>
          <p>Skills: {p.skills[0]}</p>
          <p>Skills: {p.skills[1]}</p>
          <p>Skills: {p.skills[2]}</p>
          <p>Position: {p.position}</p>
          <p>Company: {p.company}</p>
          <p>Years: {p.years}</p>
         {/* <Link to={`/package-details/${_id}`}>
         <div className="card-actions justify-end">
            <button className="btn btn-primary">View Package</button>
          </div>
         </Link> */}
        </div>
      </div>
            )
          }  
        </div>
    );
};

export default TourGuide;