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
            <h3 className="text-center text-xl text-lime-700 mb-6">
  Explore our exclusive travel packages designed to offer you the best experiences in Bangladesh. <br />
  Whether you're seeking thrilling adventures or relaxing retreats, we have something for every traveler. <br />
  Choose a package and embark on an extraordinary journey with us.
</h3>
        <div className="mx-auto md:ml-8 grid md:grid-cols-3 grid-cols-1 md:gap-6 ">
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