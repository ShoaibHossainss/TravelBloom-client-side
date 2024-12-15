import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import Footer from '../../../Footer/Footer';
import { Helmet } from 'react-helmet-async';


const MyWishlist = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 10;

    const {data: wishlist = [], refetch} = useQuery({
        queryKey: ['wishlist',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist?email=${user?.email}`)
            return res.data
        }
    })

    const handleVisit = (id) => {
        navigate(`/package-details/${id}`);
    }
    const handleDelete = packageId => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/wishlist/${packageId}`)
           .then(res=>{
            if(res.data.deletedCount > 0){
   Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
           })
            }
          });
    }

    const startPage = (currentPage - 1) * itemsPerPage;
    const endPage = startPage + itemsPerPage;
    const currentItems = wishlist.slice(startPage, endPage);
    const totalPages = Math.ceil(wishlist.length / itemsPerPage);

    return (
        <div className='dark:text-white'>
          <Helmet>
                <title>My Wishlist</title>
            </Helmet>
          <div>
          <table className="table table-zebra w-full mb-4">
            <thead>
      <tr className='dark:text-white'>
        <th></th>
        <th>Type</th>
        <th>Title</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        currentItems.map((tourist,index)=><tr key={tourist._id}>
        <th>{index+1}</th>
        <td>{tourist.tour_type}</td>
        <td>{tourist.trip_title}</td>
        <td>{tourist.price}</td>
        <td>
          <div>
    <button
       onClick={() => handleDelete(tourist._id, () => {})}
   className="btn btn-xl bg-orange-500"
    >
     Delete
   </button>
    <button
      onClick={() => handleVisit(tourist.packageId)}
      className="btn btn-xl bg-red-500"
       >
        Visit Details
        </button>
       </div>
        </td>
       
        </tr>)
    }
    </tbody>
            </table>
            <div className="flex justify-between items-center mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="btn btn-sm"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="btn btn-sm"
          >
            Next
          </button>
        </div>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default MyWishlist;