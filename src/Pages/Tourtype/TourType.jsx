import { Link } from "react-router-dom";
import image1 from '../../assets/fotor-ai-2024121017350.jpg'
import image2 from '../../assets/fotor-ai-20241210174415.jpg'
import image3 from '../../assets/fotor-ai-20241210174025.jpg'
import image4 from '../../assets/fotor-ai-20241210174628.jpg'
import image5 from '../../assets/fotor-ai-20241210174530.jpg'
import image6 from '../../assets/fotor-ai-2024121017390.jpg'


const TourType = () => {
    return (
        <div className="md:mt-8 mt-4 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-600 dark:to-gray-500 dark:text-white">
            <h3 className="text-3xl text-center mb-2">Tour Type Section</h3>
            <h3 className="text-center text-xl text-lime-700 dark:text-lime-300">
    Discover Your Perfect Journey<br />
    Embark on a journey tailored just for you! Our diverse travel packages offer something for every type of explorer.<br />
    Let us help you find the perfect package for your dream getaway!
</h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-4 mx-auto lg:p-4 lg:mt-8 md:mt-6 mt-4">
            <div className="text-center">
                <img className="opacity-90 rounded-2xl"  src={image1} alt="" />
               <Link to='/adventure'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
                Adventure
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90 rounded-2xl"  src={image2} alt="" />
                <Link to='/cultural'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Cultural
                </button>
                </Link>
                </div>
            <div className="text-center"> 
                <img className="opacity-90 rounded-2xl"  src={image3} alt="" />
                <Link to='/relaxation'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Relaxation
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90 rounded-2xl"   src={image4} alt="" />
                <Link to='/wildlife'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Wildlife
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90 rounded-2xl"  src={image5} alt="" />
                <Link to='/cruise'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Cruise
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90 rounded-2xl"  src={image6} alt="" />
                <Link to='/eco-tourism'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Eco-Tourism
                </button>
                </Link>
                </div>
        </div>
        </div>
    );
};

export default TourType;