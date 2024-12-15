import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Pages/Navbar";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet-async";

const TourGuideDetails = () => {
  const tourGuide = useLoaderData();
  const { id } = useParams();
  console.log(id);

  const guide = tourGuide.find((guide) => guide._id === id);
  console.log(guide);

  const { user, login } = useContext(AuthContext); 
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      login(); 
    } else {
      console.log('Review submitted:', { rating, comment });
      setRating(0);
      setComment('');
    }
  };

  return (
    <div className=" dark:text-white">
      <Helmet>
        <title>TourGuide Details</title>
      </Helmet>
      <Navbar />
      <div className="md:flex md:mt-8 mt-4">
        <div className="md:w-1/2">
          <img src={guide.profilePicture} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-rose-800 dark:text-rose-400">Name: {guide.name}</h2>
          <p className="text-pink-800 dark:text-pink-400">Email: {guide.email}</p>
          <p className="text-teal-900 dark:text-teal-300">Phone: {guide.phone}</p>
          <p className="text-teal-900 dark:text-teal-300">Address: {guide.address}</p>
          <p className="text-teal-900 dark:text-teal-300">Education: {guide.education}</p>
          <p className="text-teal-900 dark:text-teal-300">Skills: {guide.skills[0]}</p>
          <p className="text-teal-900 dark:text-teal-300">Skills: {guide.skills[1]}</p>
          <p className="text-teal-900 dark:text-teal-300">Skills: {guide.skills[2]}</p>
          <p className="text-teal-900 dark:text-teal-300">Position: {guide.position}</p>
          <p className="text-teal-900 dark:text-teal-300">Company: {guide.company}</p>
          <p className="text-teal-900 dark:text-teal-300">Years: {guide.years}</p>
          <Link to={'/'}>
            <div className="card-actions">
              <button className="btn text-white bg-orange-500 border-none hover:bg-orange-600">Go Back</button>
            </div>
          </Link>
        </div>
      </div>
      {/* review section */}
      <div className="mx-auto justify-center items-center text-center mt-10 mb-4">
        <h2 className="mb-2 text-teal-900 dark:text-teal-300">Leave a Review</h2>
        {!user && <p className="text-teal-900 dark:text-teal-300">Please <Link to={"/login"}>
          <button className="btn text-white bg-teal-700 hover:bg-teal-800">Login</button>
        </Link> to leave a review.</p>}
        {user && <form onSubmit={handleSubmit}>
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
            <h3 className="mb-2 text-teal-900 dark:text-teal-300">Write your comment</h3>
            <label className="mb-2 text-teal-900 dark:text-teal-300">
              <textarea
                className="mb-2 p-2 border rounded-md text-gray-800 dark:text-white dark:bg-gray-700"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit" className="btn text-white bg-orange-500 border-none hover:bg-orange-600">Submit Review</button>
        </form>}
      </div>
      <Footer />
    </div>
  );
};

export default TourGuideDetails;
