import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Footer from '../../../Footer/Footer';
import { Helmet } from 'react-helmet-async';

const MyAssignedTour = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 10; 

    const {data: touristForm = [], refetch} = useQuery({
        queryKey: ['touristForm',user?.email],
        queryFn: async () => {
        const res = await axiosSecure.get(`/touristForm?guide_email=${user?.email}`)
        return res.data
        }  
    })
    const handleAccept = (id) => { 
        axiosSecure.patch(`/touristForm/${id}`,{ status: "Accepted" })
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Booking Accepted successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }
    const handleReject = (id) => { 
        axiosSecure.patch(`/touristForm/${id}`,{ status: "Rejected" })
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: 'Booking cancelled successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }

    const startPage = (currentPage - 1) * itemsPerPage;
    const endPage = startPage + itemsPerPage;
    const currentItems = touristForm.slice(startPage, endPage);
    const totalPages = Math.ceil(touristForm.length / itemsPerPage);

    
    return (
        <div className='dark:text-white mt-16'>
           <Helmet>
                <title>My Assigned Tour</title>
            </Helmet>
            <div>
            <table className="table table-zebra w-full mb-4">
            <thead>
      <tr className='dark:text-white'>
        <th></th>
        <th>Package Name</th>
        <th>Tourist Name</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {
        currentItems.map((tourist,index)=><tr key={tourist._id}>
        <th>{index+1}</th>
        <td>{tourist.tour_name}</td>
        <td>{tourist.name}</td>
        <td>{tourist.date}</td>
        <td>{tourist.price}</td>
        <td>{tourist.status}</td>
        <td>
        {tourist.status === 'In Review' && (
          <div>
    <button
       onClick={() => handleAccept(tourist._id, () => {})}
   className="btn btn-xl bg-orange-500 border-none"
    >
     Accept
   </button>
    <button
      onClick={() => handleReject(tourist._id, () => {})}
      className="btn btn-xl bg-red-500 border-none"
       >
        Reject
        </button>
       </div>
      )}
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

export default MyAssignedTour;