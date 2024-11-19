import { useLoaderData, useParams } from "react-router-dom";


const TourGuideDetails = () => {
    const tourGuide = useLoaderData();
    
    const {id} = useParams();
   console.log(id)
 
    const guide = tourGuide.find(guide=>guide._id===id)
    console.log(guide)
    return (
        <div>
             <div className="card bg-base-100 w-96 shadow-xl mx-auto justify-center">
          <figure>
          <img className='relative'
            src={guide.profilePicture}
            alt="Shoes"/>
          </figure>
        <div className="card-body">
        <h2 className="card-title">Name: {guide.name}</h2>
          <p>Email: {guide.email}</p>
          <p>Phone: {guide.phone}</p>
          <p>Address: {guide.address}</p>
          <p>Education: {guide.education}</p>
          <p>Skills: {guide.skills[0]}</p>
          <p>Skills: {guide.skills[1]}</p>
          <p>Skills: {guide.skills[2]}</p>
          <p>Position: {guide.position}</p>
          <p>Company: {guide.company}</p>
          <p>Years: {guide.years}</p>
        </div>
      </div>
        </div>
    );
};

export default TourGuideDetails;