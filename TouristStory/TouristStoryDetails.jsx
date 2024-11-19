import { Link, useLoaderData, useParams } from "react-router-dom";


const TouristStoryDetails = () => {
    const tourStory = useLoaderData();
    
    const {id} = useParams();
   console.log(id)
 
    const story = tourStory.find(story=>story._id===id)
    console.log(story)
    return (
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
    );
};

export default TouristStoryDetails;