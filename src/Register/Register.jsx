import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../../Footer/Footer";
import Navbar from "../Pages/Navbar";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    
    const onSubmit = async (data) => {
      try {
        console.log(data);
        

        const result = await createUser(data.email, data.password);
        const loggedUser = result.user;
        console.log(loggedUser);
    

        await updateUser(data.name, data.photoURL);
    
       
        const userInfo = {
          name: data.name,
          email: data.email,
          photoURL: data.photoURL,
        };
    
 
        const res = await axiosPublic.post('/users', userInfo); 
        
        if (res.data.insertedId) {
          console.log('User added');
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Profile Updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong during registration!",
        });
      }
    };

    return (
        <div>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="hero min-h-screen mt-4 mb-4">
            <div>
            <h2 className="text-center text-lg mb-6 mt-4 text-lime-700 dark:text-lime-300">
  Sign up today to unlock exclusive travel features. <br />
  Start your adventure with us and explore the world!
</h2>

                <div className="card bg-white w-full max-w-sm shrink-0 shadow-lg border-gray-300 text-gray-800 dark:bg-gray-800">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered bg-gray-50" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered bg-gray-50" />
                            {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered bg-gray-50" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            })} placeholder="Password" className="input input-bordered bg-gray-50" />
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-500">Password must be at least 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-500">Password must be less than 20 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-500">Password must include uppercase, lowercase, number, and special character</p>
                            )}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover dark:text-white">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary border-none dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="text-center text-xl mb-2 dark:text-white"><small>Already have an account? <Link to='/login'><button className="btn btn-primary mx-2 border-none dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-white">Login</button></Link>Here</small></p>
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;