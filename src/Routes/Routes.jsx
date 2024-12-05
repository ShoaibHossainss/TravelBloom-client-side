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
import ManageUser from "../Dashboard/Admin/ManageUser";
import MyAssignedTour from "../Dashboard/TourGuide/MyAssignedTour";
import RequestAdmin from "../Dashboard/Tourist/RequestAdmin";
import MyWishlist from "../Dashboard/Tourist/MyWishlist";
import MyBooking from "../Dashboard/Tourist/MyBooking";
import AllPackage from "../Pages/Packages/AllPackage";
import TourGuideDetails from "../TourGuide/TourGuideDetails";
import TouristStoryDetails from "../../TouristStory/TouristStoryDetails";
import AllTouristStory from "../../TouristStory/AllTouristStory";
import MyTourGuideProfile from "../Dashboard/TourGuide/MyTourGuideProfile";
import AddNewTourGuide from "../TourGuide/AddNewTourGuide";
import AddNewStory from "../Dashboard/Tourist/AddNewStory";
import AdminProfile from "../Dashboard/Admin/AdminProfile";
import AdminPrivateRoute from "./AdminPrivateRoute";
import TouristPrivateRoute from "./TouristPrivateRoute";



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
                path: '/all-package',
                element: <AllPackage></AllPackage>,
                loader: () => fetch('https://assignment-12-server-lac-ten.vercel.app/touristSpot')
        },
        {
                path: '/all-touristStory',
                element: <AllTouristStory></AllTouristStory>,
                loader: () => fetch('https://assignment-12-server-lac-ten.vercel.app/touristStory')
        },
        {
                path: '/package-details/:id',
                element: <PackageDetails></PackageDetails>,
                loader: () => fetch('https://assignment-12-server-lac-ten.vercel.app/touristSpot')
        },
        {
                path: '/tourGuide-details/:id',
                element: <TourGuideDetails></TourGuideDetails>,
                loader: () => fetch('https://assignment-12-server-lac-ten.vercel.app/tourGuides')
        },
        {
                path: '/touristStory-details/:id',
                element: <TouristStoryDetails></TouristStoryDetails>,
                loader: () => fetch('https://assignment-12-server-lac-ten.vercel.app/touristStory')
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
                path: 'add-New-Story',
                element: <AddNewStory></AddNewStory>
               },
               {
                path: 'myBookings',
                element:<MyBooking></MyBooking>
               },
               {
                path: 'myWishlist',
                element: <MyWishlist></MyWishlist>
               },
               {
                path: 'requestAdmin',
                element: <RequestAdmin></RequestAdmin>
               },
            //    {tour guide}
               {
                path: 'tourGuideProfile',
                element: <TouristPrivateRoute><MyTourGuideProfile></MyTourGuideProfile></TouristPrivateRoute>
               },
               {
                path: 'Add-New-TourGuide',
                element: <TouristPrivateRoute><AddNewTourGuide></AddNewTourGuide></TouristPrivateRoute>
               },
               {
               path: 'myAssignedTour',
               element: <TouristPrivateRoute><MyAssignedTour></MyAssignedTour></TouristPrivateRoute>
               },
            // {admin}
            {
                path: 'adminProfile',
                element: <AdminPrivateRoute><AdminProfile></AdminProfile></AdminPrivateRoute>
               },
            {
                path: 'manageUsers',
                element: <AdminPrivateRoute><ManageUser></ManageUser></AdminPrivateRoute>
               },
               {
                path: 'addPackage',
                element: <AdminPrivateRoute><AddPackage></AddPackage></AdminPrivateRoute>
               },
        ]
    }
  ]);
  export default router