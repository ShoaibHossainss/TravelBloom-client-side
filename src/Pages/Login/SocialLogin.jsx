import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
  const {googleSignIn} = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result=>{
        console.log(result.user)
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post('/users',userInfo)
        .then(res=>{
         console.log(res.data)
         navigate('/');
        })
        
    })
  }
    return (
        <div className="p-4 mb-2">
            <button onClick={handleGoogleSignIn} className="btn mr-2 border-none btn-primary dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-white">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;