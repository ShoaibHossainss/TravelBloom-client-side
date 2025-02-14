import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create(
    {
        baseURL: 'https://assignment-12-server-lac-ten.vercel.app',
        withCredentials: true,
    }
)

const useAxiosSecure = () => {
    // const {logOut} = useAuth()
    // const navigate = useNavigate()
    // useEffect(()=>{
    //     axiosSecure.interceptors.response.use(res=>{
    //         return res
    //     }, error=>{
    //         console.log('error',error.response)
    //         if(error.response.status === 401 || error.response.status === 403){
    //             console.log('logout this user')
    //             logOut()
    //             .then(()=>{
    //                 navigate('/login')
    //             })
    //             .catch(error=>console.log(error))
    //         }
    //     })
    // },[logOut,navigate])
    return axiosSecure
};

export default useAxiosSecure;