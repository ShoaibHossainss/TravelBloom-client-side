import { Link } from "react-router-dom";


const TourType = () => {
 
   
   
    return (
        <div className="flex gap-6 mx-auto justify-center">
            <Link to='/adventure'>
            <div className="text-center border-[5px]">Adventure</div>
            </Link>
            <Link to='/cultural'>
            <div className="text-center border-[5px]">Cultural</div>
            </Link>
            <Link to='/relaxation'>
            <div className="text-center border-[5px]">Relaxation</div>
            </Link>
            <Link to='/wildlife'>
            <div className="text-center border-[5px]">Wildlife</div>
            </Link>
            <Link to='/cruise'>
            <div className="text-center border-[5px]">Cruise</div>
            </Link>
            <Link to='/eco-tourism'>
            <div className="text-center border-[5px]">Eco-Tourism</div>
            </Link>
        </div>
    );
};

export default TourType;