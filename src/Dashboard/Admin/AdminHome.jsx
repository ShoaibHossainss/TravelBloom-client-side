import useAuth from "../../hooks/useAuth";




const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            {
                user?.displayName ? user.displayName : 'Back'
            }
            <h3>Lovely</h3>
        </div>
    );
};

export default AdminHome;