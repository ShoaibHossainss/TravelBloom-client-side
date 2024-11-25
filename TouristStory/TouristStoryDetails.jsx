import { Link, useLoaderData, useParams } from "react-router-dom";

import {FacebookIcon,FacebookShareButton,} from "react-share";
import useAuth from "../src/hooks/useAuth";
import useAdmin from "../src/hooks/useAdmin";
import useTourGuide from "../src/hooks/useTourGuide";


const TouristStoryDetails = () => {
  const shareUrl = "facebook.com"; 
  const user = useAuth();
  const [admin] = useAdmin();
  const [tourGuide] = useTourGuide();

  
  
    const tourStory = useLoaderData();
    
    const {id} = useParams();
   console.log(id)
   
 
    const story = tourStory.find(story=>story._id===id)
    console.log(story)
    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl mx-auto justify-center">

<figure>
<img className='relative'
  src={story.imageUrl}
  alt="Shoes"/>
</figure>
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
 <div className="card-actions justify-end">
    <button className="btn btn-primary">Go Back</button>
  </div>
 </Link>
</div>



</div>
        <div className="mx-auto text-center items-center mt-10">
        {
  (user === true || admin || tourGuide) ? (
    <>
    <p>Share this story in Facebook</p>
      <FacebookShareButton  url={shareUrl}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
    </>
  ) : (
    <>
     <p>Please <a href="/login">log in</a> to share this story.</p>
    </>
  )
}
        </div>
      </div>
        
    );
};

export default TouristStoryDetails;