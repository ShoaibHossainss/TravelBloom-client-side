import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Pages/Main";
import Home from "../Pages/Home";
import Adventure from "../Pages/Packages/Adventure";
import EcoTourism from "../Pages/Packages/EcoTourism";
import Cultural from "../Pages/Packages/Cultural";
import Relaxation from "../Pages/Packages/Relaxation";
import Cruise from "../Pages/Packages/Cruise";
import Wildlife from "../Pages/Packages/Wildlife";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import Register from "../Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import AddPackage from "../Dashboard/AddPackage";
import MyProfile from "../Dashboard/MyProfile";
import ManageItems from "../Dashboard/ManageItems";
import MyBooking from "../Dashboard/MyBooking";
import AdminHome from "../Dashboard/Admin/AdminHome";
import ManageUser from "../Dashboard/Admin/ManageUser";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
                path: '/package-details/:id',
                element: <PackageDetails></PackageDetails>,
                loader: () => fetch('http://localhost:5000/touristSpot')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/adventure',
            element: <Adventure></Adventure>,
        },
        {
            path: '/cultural',
            element: <Cultural></Cultural>
        },
        {
            path: '/relaxation',
            element: <Relaxation></Relaxation>,
        },
        {
            path: '/wildlife',
            element: <Wildlife></Wildlife>,
        },
        {
            path: '/cruise',
            element: <Cruise></Cruise>,
        },
        {
            path: '/eco-tourism',
            element: <EcoTourism></EcoTourism>,
        },
    ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // {tourist}
            {
                path: 'userProfile',
                element: <MyProfile></MyProfile>
               },
               {
                path: 'myBookings',
                element: <AddPackage></AddPackage>
               },
               {
                path: 'myWishlist',
                element: <AddPackage></AddPackage>
               },
               {
                path: 'requestToAdmin',
                element: <AddPackage></AddPackage>
               },
            //    {tour guide}
               {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
               },
               {
               path: 'myAssignedTour',
               element: <MyProfile></MyProfile>
               },
            // {admin}
            {
                path: 'adminProfile',
                element: <AdminHome></AdminHome>
               },
            {
                path: 'manageUsers',
                element: <ManageUser></ManageUser>
               },
               {
                path: 'addPackage',
                element: <AddPackage></AddPackage>
               },
        ]
    }
  ]);
  export default router