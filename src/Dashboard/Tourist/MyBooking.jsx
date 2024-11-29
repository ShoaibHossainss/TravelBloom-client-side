import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';


const MyBooking = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: touristForm = [], refetch} = useQuery({
        queryKey: ['touristForm',user?.email],
        queryFn: async () => {
        const res = await axiosSecure.get(`/touristForm?email=${user?.email}`)
        return res.data
        }  
    })

    const handleCancel = (id) => { 
        axiosSecure.patch(`/touristForm/${id}`,{ status: "Cancelled" })
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
    
    const handlePay = (id) => {
        axiosSecure.patch(`/touristForm/${id}`,{ status: "Accepted" })
        .then(res=>{
            console.log(res.data)
            // if(res.data.modifiedCount > 0){
            //     Swal.fire({
            //         position: "top-end",
            //         icon: "success",
            //         title: `Booking was accepted by tour guide.`,
            //         showConfirmButton: false,
            //         timer: 1500
            //       });
                  
            // }
        })
       
    }
    
    return (
        <div>
            <h3>Nice</h3>
            <div>
            <table className="table table-zebra w-full">
            <thead>
      <tr>
        <th></th>
        <th>Package Name</th>
        <th>Guide Name</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {
        touristForm.map((tourist,index)=><tr key={tourist._id}>
        <th>{index+1}</th>
        <td>{tourist.tour_name}</td>
        <td>{tourist.guide}</td>
        <td>{tourist.date}</td>
        <td>{tourist.price}</td>
        <td>{tourist.status}</td>
        <td>
            {
            tourist.status === 'In Review' && (
                <button onClick={()=>handleCancel(tourist._id)} className="btn btn-xl bg-orange-500">
                    Cancel
                </button>
            )
            }
            {
            tourist.status === 'Accepted' && (
                <button onClick={()=>handlePay(tourist._id)} className="btn btn-xl bg-orange-500">
                    Pay Now
                </button>
            )
            }
        </td>
        </tr>)
    }
    </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyBooking;