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
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useTourGuide from "../hooks/useTourGuide";
// import useUser from "../hooks/useUser";

const Dashboard = () => {
    const isAdmin = useAdmin();
    const isTourGuide = useTourGuide()
    const {user} = useContext(AuthContext)
    // const user = useUser(); // Assuming useUser handles the general user case

    return (
        <div className="flex">
            <div className="w-65 min-h-full bg-orange-500">
                <ul className="menu p-4">
                    {
                        isAdmin ? (
                            <>
                                <li><NavLink to='/dashboard/adminProfile'>
                                    <FaHome /> Admin Profile</NavLink></li>
                                <li><NavLink to='/dashboard/addPackage'>
                                    <FaUtensilSpoon /> Add Package</NavLink></li>
                                <li><NavLink to='/dashboard/manageUsers'>
                                    <FaList /> Manage Users</NavLink></li>
                            </>
                        ) : isTourGuide ? (
                            <>
                                <li><NavLink to='/dashboard/touristProfile'>
                                    <FaHome /> Tourist Profile</NavLink></li>
                                <li><NavLink to='/dashboard/bookedPackages'>
                                    <FaUtensilSpoon /> My Booked Packages</NavLink></li>
                            </>
                        ) : user ? (
                            <>
                                <li><NavLink to='/dashboard/userProfile'>
                                    <FaHome />My Profile</NavLink></li>
                                <li><NavLink to='/dashboard/myBookings'>
                                    <FaUtensilSpoon /> My Bookings</NavLink></li>
                            </>
                        ) : (
                            <p>No role found</p>
                        )
                    }
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;