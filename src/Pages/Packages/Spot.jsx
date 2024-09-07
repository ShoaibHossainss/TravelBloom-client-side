
import {FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Spot = ({spot}) => {
    const {primary_image,tour_type,trip_title,price,_id} = spot;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
          <img className='relative'
            src={primary_image}
            alt="Shoes"/>
          </figure>
          <FaRegHeart className='btn w-[50px] top-0 -right-0 absolute bg-red-700 border-none'></FaRegHeart>
         
          
        <div className="card-body">
        <h2 className="card-title">Type: {tour_type}</h2>
          <p>Title: {trip_title}</p>
          <p>Price: {price}</p>
         <Link to={`/package-details/${_id}`}>
         <div className="card-actions justify-end">
            <button className="btn btn-primary">View Package</button>
          </div>
         </Link>
        </div>
      </div>
    );
};

export default Spot;