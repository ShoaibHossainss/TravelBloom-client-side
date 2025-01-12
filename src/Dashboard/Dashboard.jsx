// import { FaHome, FaList, FaUtensilSpoon } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";



// const Dashboard = () => {
//     const isAdmin = useAdmin();
    
//     return (
//         <div className="flex">
//             <div className="w-65 min-h-full bg-orange-500">
//              <ul className="menu p-4">
//            {
//             isAdmin ? <>
//               <li><NavLink to='/dashboard/myProfile'>
//                 <FaHome></FaHome>
//                 My Profile</NavLink></li>
//              <li><NavLink to='/dashboard/addPackage'>
//              <FaUtensilSpoon></FaUtensilSpoon>
//                 Add Package</NavLink></li>
//              <li><NavLink to='/dashboard/manageItems'>
//              <FaList></FaList>
//                 Manage Users</NavLink></li>
//             </> :   <>  </> 
//            }
//            <li><NavLink to='/dashboard/myProfile'>
//                 <FaHome></FaHome>
//                 My Profile</NavLink></li>
//              <li><NavLink to='/dashboard/addPackage'>
//              <FaUtensilSpoon></FaUtensilSpoon>
//                 Add Package</NavLink></li>
//              <li><NavLink to='/dashboard/manageItems'>
//              <FaList></FaList>
//                 Manage Users</NavLink></li>
//              </ul>
             
//             </div>
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
            
//         </div>
//     );
// };

// export default Dashboard;


import { FaHome, FaList, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

import useTourGuide from "../hooks/useTourGuide";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

// import useUser from "../hooks/useUser";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    // const isAdmin = useAdmin();
    // const isTourGuide = useTourGuide()
    // const {user} = useAuth()
    // const user = useUser(); // Assuming useUser handles the general user case
    
    const [isAdmin, isAdminLoading] = useAdmin();  // Returns [boolean, loadingStatus]
    const [isTourGuide, isTourGuideLoading] = useTourGuide();  // Returns [boolean, loadingStatus]
    const { user, loading: userLoading } = useAuth();  // useAuth provides user and loading status

    // Show loading state until all hooks have loaded
    if (isAdminLoading || isTourGuideLoading || userLoading) {
        return <div>Loading...</div>;
    }
   
    return (
        
        <div className="flex">
              <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-red-800 text-white p-2 rounded-md shadow"
      >
        {isSidebarOpen ? "✖" : "☰"}
      </button>
            <div className={`fixed lg:static ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64 min-h-screen bg-teal-800 text-white transition-transform duration-300 lg:translate-x-0 z-40`}>
                <ul className="menu p-4 mt-12">
                    {isAdmin ? 
                        <>
                            <li><NavLink to='/dashboard/adminProfile'>
                                <FaHome /> Admin Profile
                            </NavLink></li>
                            <li><NavLink to='/dashboard/addPackage'>
                                <FaUtensilSpoon /> Add Package
                            </NavLink></li>
                            <li><NavLink to='/dashboard/manageUsers'>
                                <FaList /> Manage Users
                            </NavLink></li>
                        </>
                     : isTourGuide ? 
                        <>
                            <li><NavLink to='/dashboard/tourGuideProfile'>
                                <FaHome /> Tour Guide Profile
                            </NavLink></li>
                            <li><NavLink to='/dashboard/myAssignedTour'>
                                <FaUtensilSpoon /> My Assigned Tours
                            </NavLink></li>
                        </>
                     : user ?
                        <>
                            <li><NavLink to='/dashboard/userProfile'>
                                <FaHome /> My Profile
                            </NavLink></li>
                            <li><NavLink to='/dashboard/myBookings'>
                                <FaUtensilSpoon /> My Bookings
                            </NavLink></li>
                            <li><NavLink to='/dashboard/myWishlist'>
                                <FaUtensilSpoon /> My Wishlist
                            </NavLink></li>
                            <li><NavLink to='/dashboard/requestAdmin'>
                                <FaUtensilSpoon /> Request to Admin
                            </NavLink></li>
                        </>
                     : (
                        <p>No role found</p>
                    )
                    
                    }

                </ul>
            </div>
            <div className="flex-1 lg:p-8 p-2 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;