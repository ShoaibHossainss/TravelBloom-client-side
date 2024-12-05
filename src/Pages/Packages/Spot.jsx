
import {FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useTourGuide from '../../hooks/useTourGuide';


const Spot = ({spot}) => {
  const {user} = useAuth();
  const [admin] = useAdmin();
  const [tourGuide] = useTourGuide();
    const {primary_image,tour_type,trip_title,price,_id} = spot;
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
      if (user?.email) {
        fetch(`https://assignment-12-server-lac-ten.vercel.app/wishlist?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setWishlist(data));
      }
    }, [user?.email]);
    const handleAddToWishlist = () => {
      if (!user) {
        Swal.fire({
            icon: 'warning',
            title: 'Please log in to add items to your wishlist.',
            showConfirmButton: true,
        });
        return;
    }
    
if (admin || tourGuide) {
  Swal.fire({
    icon: 'warning',
    title: 'Admins and tour guides cannot add items to the wishlist.',
    showConfirmButton: true,
  });
  return;
}
 
    const checkWishlist = wishlist.find((item) => item.packageId === _id);
    if (checkWishlist) {
        Swal.fire({
            title: "Already Added",
            text: "This package is already in your wishlist.",
            icon: "info",
        });
        return;
    }
    const wishlistItem = {
      email: user?.email,
      packageId: _id,
      trip_title,
      tour_type,
      price,
      primary_image,
  };
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, add it!"
  }).then((result) => {
    if (result.isConfirmed){
        fetch('https://assignment-12-server-lac-ten.vercel.app/wishlist',{
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(wishlistItem)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Added!",
                    text: "Package has been added to your wishlist",
                    icon: "success"
                  });
                  setWishlist((prev) => [...prev, wishlistItem]);
            }  
          })
          .catch(error => {
            console.error(error); 
            Swal.fire({
                icon: "error",
                title: "Failed to Add!",
                text: "Something went wrong while adding the package to your wishlist. Please try again.",
                showConfirmButton: true,
            });
        });
     
    }
  });
    }
    return (
        <div className="card bg-base-100  shadow-xl text-orange-600 mb-10 hover:bg-teal-200">
          <figure>
          <img className='relative'
            src={primary_image}
            alt="Shoes"/>
          </figure>
          <FaRegHeart onClick={handleAddToWishlist} className='btn w-[50px] top-0 -right-0 absolute bg-red-700 border-none'></FaRegHeart>
         
          
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