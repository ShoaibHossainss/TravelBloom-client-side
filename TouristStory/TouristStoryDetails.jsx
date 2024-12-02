import { Link, useLoaderData, useParams } from "react-router-dom";

import {FacebookIcon,FacebookShareButton,} from "react-share";
import useAuth from "../src/hooks/useAuth";
import useAdmin from "../src/hooks/useAdmin";
import useTourGuide from "../src/hooks/useTourGuide";
import Navbar from "../src/Pages/Navbar";




const TouristStoryDetails = () => {
  const shareUrl = "facebook.com"; 
  const {user} = useAuth();
   const tourStory = useLoaderData();
  const {id} = useParams();
   console.log(id)
   

  const story = tourStory?.find(story=>story._id===id)
  console.log(story)
   
    return (
      <div>
        <Navbar></Navbar>
        <div className="flex mt-10">
          <div>
            <img src={story.imageUrl} alt="" />
          </div>
<div className="card-body">
<h2 className="card-title">Type: {story.type}</h2>
<p>Title: {story.title}</p>
<p>Location: {story.location}</p>
<p>Date: {story.dateVisited}</p>
<p>Experience: {story.experience}</p>
<p>Highlights: {story.highlights[0]}</p>
<p>Highlights: {story.highlights[1]}</p>
<p>Highlights: {story.highlights[2]}</p>
<Link to={'/'}>
 <div className="card-actions ">
    <button className="btn btn-primary">Go Back</button>
  </div>
 </Link>
 
</div>

</div>
        <div className="mx-auto text-center items-center mt-10">
        {
  user ? (
    <>
    <p>Share this story in Facebook</p>
      <FacebookShareButton  url={shareUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </>
  ) : (
    <>
     <p>Please <Link to={"/login"}>
     <button className="btn">
     Login
     </button>
     </Link> to share this story.</p>
    </>
  )
}
        </div>
      </div>
        
    );
};

export default TouristStoryDetails;

