import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useTourGuide from "../hooks/useTourGuide";




const TouristPrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isTourist,isTouristLoading] = useTourGuide()

    if(loading || isTouristLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isTourist) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default TouristPrivateRoute;