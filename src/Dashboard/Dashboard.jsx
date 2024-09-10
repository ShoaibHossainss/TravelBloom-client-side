import { FaHome, FaList, FaUtensilSpoon } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-65 min-h-full bg-orange-500">
             <ul className="menu p-4">
             <li><NavLink to='/dashboard/myProfile'>
                <FaHome></FaHome>
                My Profile</NavLink></li>
             <li><NavLink to='/dashboard/addPackage'>
             <FaUtensilSpoon></FaUtensilSpoon>
                Add Package</NavLink></li>
             <li><NavLink to='/dashboard/manageItems'>
             <FaList></FaList>
                Manage Users</NavLink></li>
             </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Dashboard;