import { Link } from "react-router-dom";
import image1 from '../../assets/Firefly adventure 73216.jpg'
import image2 from '../../assets/Firefly Historical Tour of Ancient Rome 7759.jpg'
import image3 from '../../assets/Firefly Luxury Spa Retreat in Bali- 67717.jpg'
import image4 from '../../assets/Firefly African Safari Adventure 66097.jpg'
import image5 from '../../assets/Firefly Mediterranean Cruise Experience 99504.jpg'
import image6 from '../../assets/Firefly Amazon Rainforest Expedition 39528.jpg'


const TourType = () => {
 
   
   
    return (
        <div>
            <h3 className="text-center">Look at our packages and
                <br />
                <span>browse your favorite ones</span>
            </h3>
            <div className="grid grid-cols-3 gap-6 mx-auto p-4">
            <div className="text-center">
                <img className="opacity-90"  src={image1} alt="" />
               <Link to='/adventure'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
                Adventure
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90"  src={image2} alt="" />
                <Link to='/cultural'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Cultural
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90"  src={image3} alt="" />
                <Link to='/relaxation'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Relaxation
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90"  src={image4} alt="" />
                <Link to='/wildlife'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Wildlife
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90"  src={image5} alt="" />
                <Link to='/cruise'>
               <button className="btn px-4 pb-1 bg-green-500 -translate-y-12 text-2xl border-none">
               Cruise
                </button>
                </Link>
                </div>
            <div className="text-center">
                <img className="opacity-90"  src={image6} alt="" />
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