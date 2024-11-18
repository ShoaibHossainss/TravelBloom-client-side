import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyProfile = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h3>{user?.email}</h3>
            <h3>Nice</h3>
        </div>
    );
};

export default MyProfile;