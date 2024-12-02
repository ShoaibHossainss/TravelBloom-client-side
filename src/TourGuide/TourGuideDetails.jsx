import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Pages/Navbar";


const TourGuideDetails = () => {
    const tourGuide = useLoaderData();
    
    const {id} = useParams();
   console.log(id)
 
    const guide = tourGuide.find(guide=>guide._id===id)
    console.log(guide)


    const { user, login } = useContext(AuthContext); // Access auth context
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!user) {
        login(); // Trigger login if user is not authenticated
      } else {
        // Handle review submission, e.g., save to a database
        console.log('Review submitted:', { rating, comment });
        setRating(0);
        setComment('');
      }
    };
    return (
        <div>
          <Navbar></Navbar>
             <div className="flex mt-10">
          <div className="w-1/2">
          <img src={guide.profilePicture} alt="" />
          </div>
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
          <Link to={'/'}>
         <div className="card-actions">
            <button className="btn btn-primary">Go Back</button>
          </div>
         </Link>
        </div>
      </div>
      {/* review section */}
      <div className="mx-auto justify-center items-center text-center mt-10">
      <h2 className="mb-2">Leave a Review</h2>
      {!user && <p>Please <Link to={"/login"}>
     <button className="btn">
     Login
     </button>
     </Link> to leave a review.</p>}
      {
        user && <form onSubmit={handleSubmit} >
      <div className="rating">
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    value={1}
    onChange={(e) => setRating(Number(e.target.value))}
    required
    defaultChecked
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    value={2}
    onChange={(e) => setRating(Number(e.target.value))}
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    value={3}
    onChange={(e) => setRating(Number(e.target.value))}
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    value={4}
    onChange={(e) => setRating(Number(e.target.value))}
  />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    value={5}
    onChange={(e) => setRating(Number(e.target.value))}
  />
</div>


       <div>
        <h3 className="mb-2">Write your comment</h3>
       <label className="mb-2">
          <textarea className="mb-2"
           value={comment}
           onChange={(e) => setComment(e.target.value)}
           required
          />
        </label>
       </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
      }
        </div>
        </div>
    );
};

export default TourGuideDetails;

