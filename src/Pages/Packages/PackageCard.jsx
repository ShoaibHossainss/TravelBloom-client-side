import { useEffect, useState } from "react";
import Spot from "./Spot";



const PackageCard = () => {
    const [spots,setSpots] = useState([]);
    useEffect(()=>{
        fetch('/spot.json')
        .then(res=>res.json())
        .then(data=>setSpots(data))
    },[])
    return (
        <div>
            <h3 className="text-center mt-4 mb-4 text-2xl ">Here some of our tourism packages
                <br />
                <span>Visit and choose yours</span>
            </h3>
        <div className="mx-auto ml-8 grid grid-cols-3 gap-6 ">
        {
            spots.map(spot=><Spot key={spot.id} spot={spot}></Spot>)
        }
        </div>
      
    </div>
    );
};

export default PackageCard;