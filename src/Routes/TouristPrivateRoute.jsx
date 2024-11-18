import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useTourist from "../hooks/useTourist";



const TouristPrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [isTourist,isTouristLoading] = useTourist()

    if(loading || isTouristLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isTourist) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default TouristPrivateRoute;