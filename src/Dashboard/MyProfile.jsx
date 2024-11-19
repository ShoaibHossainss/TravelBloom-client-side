import useAuth from "../hooks/useAuth";




const MyProfile = () => {
    const {user} = useAuth()
   return(
   <div>
     <div className="avatar flex mx-auto items-center justify-center text-center">
  <div className="w-24 rounded-full">
    <img src={user?.PhotoURL} />
  </div>
</div>
<form className="card-body">
<div className="w-1/2 mx-auto items-center justify-center text-center">
<label className="input input-bordered flex justify-center items-center text-center gap-2">
{
                user?.displayName
            }

</label>
</div>
<div className="w-1/2 mx-auto items-center justify-center text-center">
<label className="input input-bordered flex justify-center items-center text-center gap-2">
  {
    user?.email
  }

</label>
</div>
</form>
   </div>
   )
    
};

export default MyProfile;