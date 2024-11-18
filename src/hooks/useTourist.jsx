import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTourist = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useAuth()
   const {data: isTourist,isPending: isTouristLoading} = useQuery({
    queryKey: [user?.email, 'isTourist'],
    enabled: !loading,
    queryFn: async () =>{
        const res = await axiosSecure.get(`/users/tourist/${user?.email}`)
        console.log(res.data)
        return res.data?.admin;
    }
   })
   return [isTourist,isTouristLoading]
};


export default useTourist;