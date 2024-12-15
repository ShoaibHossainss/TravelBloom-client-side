import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet-async";




const MyProfile = () => {
    const {user} = useAuth()
   return(
   <div className="dark:text-white">
    <Helmet>
                <title>Tourist Profile</title>
            </Helmet>
     <div className="avatar flex mx-auto items-center justify-center text-center">
  <div className="w-24 rounded-full">
  {user?.photoURL? <img src={user?.photoURL} alt=""  /> : 
   <img alt="" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
   />
     
   }
  </div>
</div>
<div className="ml-4">
<form className="card-body w-1/2 mt-4 mx-auto">
<div className="items-center justify-center text-center mb-3 form-control w-full ">
<label className="input input-bordered flex justify-center items-center text-center gap-2 dark:bg-blue-900">
{
                user?.displayName
            }

</label>
</div>
<div className="items-center justify-center text-center mb-3 form-control w-full">
<label className="input input-bordered flex justify-center items-center text-center gap-2 dark:bg-blue-900">
  {
    user?.email
  }

</label>
</div>
</form>
</div>
<div className="mx-auto text-center items-center mb-4">
  <Link to={'/dashboard/add-New-Story'}>
  <button className="btn flex mx-auto mt-4 text-white bg-orange-500 border-none hover:bg-orange-600">Add a story</button>
  </Link>
</div>
<Footer></Footer>
   </div>
   )
    
};

export default MyProfile;