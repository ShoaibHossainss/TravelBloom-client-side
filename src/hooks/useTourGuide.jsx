
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTourGuide = () => {
    const axiosSecure = useAxiosSecure()
    const {user,loading} = useAuth()
   const {data: isTourGuide,isPending: isTourGuideLoading} = useQuery({
    queryKey: [user?.email, 'isTourist'],
    enabled: !loading,
    queryFn: async () =>{
        const res = await axiosSecure.get(`/users/tourGuide/${user?.email}`)
        console.log(res.data)
        return res.data?.tourGuide;
    }
   })
   return [isTourGuide,isTourGuideLoading]
};


export default useTourGuide;