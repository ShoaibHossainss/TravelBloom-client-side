import { useEffect, useState } from "react";
import Spot from "./Spot";
import { Link } from "react-router-dom";



const PackageCard = () => {
    const [spots,setSpots] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-12-server-lac-ten.vercel.app/touristSpot')
        .then(res=>res.json())
        .then(data=>setSpots(data))
    },[])
    return (
        <div>
            <h3 className="text-center mt-4 mb-4 text-2xl ">Here some of our tourism packages
                <br />
                <span>Visit and choose yours</span>
            </h3>
        <div className="mx-auto lg:ml-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 ">
        {
            spots.map(spot=><Spot key={spot.id} spot={spot}></Spot>)
        }
        </div>
        <Link to={'/all-package'}>
         <div className="card-actions justify-center">
            <button className="btn btn-primary">All Package</button>
          </div>
         </Link>
    </div>
    );
};

export default PackageCard;