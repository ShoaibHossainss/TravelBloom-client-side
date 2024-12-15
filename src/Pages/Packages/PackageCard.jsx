import { useEffect, useState } from "react";
import Spot from "./Spot";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";



const PackageCard = () => {
    const axiosPublic = useAxiosPublic()
    const {data: spots = []} = useQuery({
        queryKey: ['spot'],
        queryFn: async () => {
            const res = await axiosPublic('/touristSpot')
            return res.data; 
        }
    })
    return (
        <div>
            <h3 className="text-center text-xl text-lime-700 dark:text-lime-300 mb-6">
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
            <button className="btn text-white bg-orange-500 border-none hover:bg-orange-600">All Package</button>
          </div>
         </Link>
    </div>
    );
};

export default PackageCard;