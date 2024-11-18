// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
// import useAxiosSecure from "./useAxiosSecure";


// const useAdmin = () => {
//     const axiosSecure = useAxiosSecure()
//     const {user,loading} = useAuth()
//    const {data: isAdmin,isPending: isAdminLoading} = useQuery({
//     queryKey: [user?.email, 'isAdmin'],
//     enabled: !loading,
//     queryFn: async () =>{
//         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
//         console.log(res.data)
//         return res.data?.admin;
//     }
//    })
//    return [isAdmin,isAdminLoading]
// };

// export default useAdmin;



import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const { user, loading: authLoading } = useAuth();

    // Use the `isLoading` property from `useQuery`
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email && !authLoading, // Ensure the query only runs if user email is available and auth is not loading
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data?.admin;
        },
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;
