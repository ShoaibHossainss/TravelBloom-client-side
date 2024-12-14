import { Link, useLoaderData, useParams } from "react-router-dom";

import {FacebookIcon,FacebookShareButton,} from "react-share";
import useAuth from "../src/hooks/useAuth";
import useAdmin from "../src/hooks/useAdmin";
import useTourGuide from "../src/hooks/useTourGuide";
import Navbar from "../src/Pages/Navbar";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";




const TouristStoryDetails = () => {
  const shareUrl = "facebook.com"; 
  const {user} = useAuth();
   const tourStory = useLoaderData();
  const {id} = useParams();
   console.log(id)
   

  const story = tourStory?.find(story=>story._id===id)
  console.log(story)
   
    return (
      <div className="dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 dark:text-white">
        <Helmet>
                <title>Story Details</title>
            </Helmet>
        <Navbar></Navbar>
        <div className="md:flex md:mt-10 mt-4">
          <div > 
            <img  className="rounded-2xl w-full" src={story.imageUrl} alt="" />
          </div>
          <div className="card-body">
          <h2 className="card-title text-rose-800 dark:text-rose-300">Type: {story.type}</h2>
          <p className="text-pink-800 dark:text-pink-300">Title: {story.title}</p>
          <p className="text-teal-900 dark:text-teal-300">Location: {story.location}</p>
          <p className="text-teal-900 dark:text-teal-300">Date: {story.dateVisited}</p>
          <p className="text-teal-900 dark:text-teal-300">Experience: {story.experience}</p>
          <p className="text-teal-900 dark:text-teal-300">Highlights: {story.highlights[0]}</p>
          <p className="text-teal-900 dark:text-teal-300">Highlights: {story.highlights[1]}</p>
          <p className="text-teal-900 dark:text-teal-300">Highlights: {story.highlights[2]}</p>
          <Link to={'/'}>
            <div className="card-actions">
              <button className="btn text-white bg-orange-500 hover:bg-orange-600 border-none">
                Go Back
              </button>
            </div>
          </Link>
        </div>

</div>
        <div className="mx-auto text-center items-center mt-10 mb-4">
        {
  user ? (
    <>
    <p className="text-teal-900 dark:text-teal-300 mb-2">Share this story in Facebook</p>
      <FacebookShareButton  url={shareUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </>
  ) : (
    <>
     <p className="text-teal-900 dark:text-teal-300">Please <Link to={"/login"}>
     <button className="btn text-white bg-orange-500 hover:bg-orange-600">
     Login
     </button>
     </Link> to share this story.</p>
    </>
  )
}
        </div>
        <Footer></Footer>
      </div>
        
    );
};

export default TouristStoryDetails;



