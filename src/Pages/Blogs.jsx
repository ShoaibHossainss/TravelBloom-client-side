import { Helmet } from "react-helmet-async";
import Footer from "../../Footer/Footer";
import TouristStory from "../../TouristStory/TouristStory";
import Navbar from "./Navbar";


const Blogs = () => {
    return (
        <div>
             <Helmet>
                                <title>Blogs</title>
                            </Helmet>
            <Navbar></Navbar>
           <div className="mt-6 mb-6">
           <TouristStory></TouristStory>
           </div> 
           <Footer></Footer>
        </div>
    );
};

export default Blogs;