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
                loader: () => fetch('http://localhost:5000/touristSpot')
        },
        {
                path: '/all-touristStory',
                element: <AllTouristStory></AllTouristStory>,
                loader: () => fetch('http://localhost:5000/touristStory')
        },
        {
                path: '/package-details/:id',
                element: <PackageDetails></PackageDetails>,
                loader: () => fetch('http://localhost:5000/touristSpot')
        },
        {
                path: '/tourGuide-details/:id',
                element: <TourGuideDetails></TourGuideDetails>,
                loader: () => fetch('http://localhost:5000/tourGuides')
        },
        {
                path: '/touristStory-details/:id',
                element: <TouristStoryDetails></TouristStoryDetails>,
                loader: () => fetch('http://localhost:5000/touristStory')
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
                element: <MyBooking></MyBooking>
               },
               {
                path: 'myWishlist',
                element: <MyWishlist></MyWishlist>
               },
               {
                path: 'requestToAdmin',
                element: <RequestAdmin></RequestAdmin>
               },
            //    {tour guide}
               {
                path: 'tourGuideProfile',
                element: <MyTourGuideProfile></MyTourGuideProfile>
               },
               {
                path: 'Add-New-TourGuide',
                element: <AddNewTourGuide></AddNewTourGuide>
               },
               {
               path: 'myAssignedTour',
               element: <MyAssignedTour></MyAssignedTour>
               },
            // {admin}
            {
                path: 'adminProfile',
                element: <MyProfile></MyProfile>
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