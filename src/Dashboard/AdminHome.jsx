import useAuth from "../hooks/useAuth";



const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default AdminHome;