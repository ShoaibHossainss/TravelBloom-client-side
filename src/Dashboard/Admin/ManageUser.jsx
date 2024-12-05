import { useQuery } from "@tanstack/react-query";

import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import Select from "react-select";



const ManageUser = () => {
    const axiosSecure =useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await axiosSecure.get('/users');
          return res.data;
      }
  })
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");


  const roleOptions = [
      { value: "", label: "All" },
      { value: "admin", label: "Admin" },
      { value: "tourGuide", label: "Tour Guide" },
      { value: "requested", label: "Requested" },
  ];
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole ? user.role === selectedRole : true;
    return matchesSearch && matchesRole 
});
const handleMenuOpen = () => {
  console.log("Dropdown menu opened!");
};

    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user?._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }
    const handleMakeTourGuide = user =>{
        axiosSecure.patch(`/users/tourGuide/${user?._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.success){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Tour Guide now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch();
            }
        })
    }

    const handleApproveRequest = (user) => {
      axiosSecure.patch(`/users/tourGuide/${user?._id}`)
          .then(res => {
              if (res.data.success) {
                  Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: `${user.name} is now a Tour Guide!`,
                      showConfirmButton: false,
                      timer: 1500
                  });
                  refetch();
              }
          });
  };

    const handleDeleteUser = user => {
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
           
            axiosSecure.delete(`/users/${user._id}`)
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
    const tourGuideRequests = users.filter((user) => user.role === "requested");
    return (
        <div className="w-full">
           <div className="flex justify-evenly py-8">
           <h3>Total Users : {users.length}</h3>
           </div>
           <div className="flex gap-4 items-center justify-center">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search by Name/Email"
                    className="input input-bordered w-full max-w-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Role Filter */}
                <Select
                    options={roleOptions}
                    defaultValue={roleOptions[0]}
                    onMenuOpen={handleMenuOpen}
                    onChange={(selected) => setSelectedRole(selected.value)}
                    className="w-full max-w-xs"
                />
            </div>
           <h3 className="text-xl font-bold mb-4 text-center mt-4">Tour Guide Requests</h3>
           {tourGuideRequests.length === 0 ? (
                <p className="text-center mt-4">No tour guide requests at the moment.</p>
            ) : (
                <div>
                 <table className="table table-zebra w-full">
                <thead>
                 <tr>
                  <th>#</th>
                <th>Name</th>
                <th>Email</th>
               <th>Action</th>
               </tr>
              </thead>
              <tbody>
            {tourGuideRequests.map((user, index) => (
              <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
               <button
                onClick={() => handleApproveRequest(user)}
                className="btn btn-xl bg-green-500 text-white"
                >
                Approve
                </button>
                </td>
                </tr>
                ))}
                </tbody>
                </table>
                </div>
            )}
           <h3 className="text-xl font-bold mb-4 mt-10 text-center">User Requests</h3>
           <div>
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    
    <tbody>
     {
        filteredUsers.map((user,index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
        {
            user?.role === 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-xl bg-orange-500" disabled={user?.role === 'tourGuide'}>
                
            <FaUsers className="text-red-600"></FaUsers>
        </button>
        }
            </td>
            <td>
        {
            user?.role === 'tourGuide' ? 'TourGuide' : <button onClick={()=>handleMakeTourGuide(user)} className="btn btn-xl bg-orange-500" disabled={user?.role === 'admin'}>
            <FaUsers className="text-red-600"></FaUsers>
        </button>
        }
            </td>
            <td>
<button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost btn-xl">
                  <FaTrash className="text-red-600"></FaTrash>
                </button>
            </td>
          </tr>)
     }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUser;
