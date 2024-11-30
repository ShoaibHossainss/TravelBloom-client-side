
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";


const RequestAdmin = () => {
    const { user } = useAuth(); // Assuming user contains user details like email, role
    const axiosSecure = useAxiosSecure();
    const [isRequested, setIsRequested] = useState(user?.role === 'requested'); // Check initial role

    const handleRequest = () => {
        axiosSecure.patch('/users/request-guide', { email: user.email })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Request sent successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setIsRequested(true); // Update the button state
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
        <div>
        <h3>Request to Become a Tour Guide</h3>
        <button
            onClick={handleRequest}
            disabled={isRequested}
            className={`btn btn-xl ${isRequested ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
        >
            {isRequested ? 'Requested' : 'Request'}
        </button>
    </div>
    );
};

export default RequestAdmin;