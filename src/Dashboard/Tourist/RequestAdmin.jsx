
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Footer from "../../../Footer/Footer";


const RequestAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure(); 
    const [isRequested, setIsRequested] = useState(false); 
    useEffect(() => {
       {
        if(user?.email){
        axiosSecure.get(`/users/${user?.email}`)
        .then(res => {
            if (res.data.role === 'requested') {
                setIsRequested(true);
            }
        })
        }
       }
    }, [user?.email,axiosSecure]);

    const handleRequest = () => {
        axiosSecure.patch('/users/request-guide', { email: user?.email })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Request sent successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setIsRequested(true); 
                }
            })
            .catch(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to send request.',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <div className="mb-4">
        <h3>Request to Become a Tour Guide</h3>
        <button
            onClick={handleRequest}
            disabled={isRequested}
            className={`btn btn-xl ${isRequested ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
        >
            {isRequested ? 'Requested' : 'Request'}
        </button>
        <Footer></Footer>
    </div>
    );
};

export default RequestAdmin;