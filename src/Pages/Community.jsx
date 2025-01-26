import { Helmet } from "react-helmet-async";
import Footer from "../../Footer/Footer";
import Navbar from "./Navbar";


const Community = () => {
    return (
        <div>
             <Helmet>
                                <title>Community</title>
                            </Helmet>
            <Navbar></Navbar>
            <h1 className="text-3xl text-center mt-6 mb-2">Community</h1>
           <p className="text-center text-xl mb-6 text-lime-700 dark:text-lime-300">
           Welcome to the TravelBloom Community, a vibrant space where travelers and adventure seekers come together to share their stories, experiences, and insights about exploring the beautiful destinations of Bangladesh. Here, you can connect with like-minded individuals, discover travel tips, and participate in engaging discussions about culture, food, festivals, and much more. Whether you're looking for advice, want to showcase your travel memories, or simply wish to be inspired by others, this is the perfect place for you. Join the conversation, contribute your own stories, and be part of a growing community that celebrates the joy of travel and discovery. Together, let’s make every journey memorable!</p> 
           <Footer></Footer>
        </div>
    );
};

export default Community;