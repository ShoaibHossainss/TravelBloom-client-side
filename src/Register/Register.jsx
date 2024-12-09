import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Footer from "../../Footer/Footer";
import Navbar from "../Pages/Navbar";


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
            <Navbar></Navbar>
            <div className="hero min-h-screen mt-4 mb-4 bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Join us today and explore the amazing features we offer!
                    </p>
                </div>
                <div className="card bg-white w-full max-w-sm shrink-0 shadow-lg border-gray-300 text-gray-800">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered bg-gray-50" />
                            {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            })} placeholder="Password" className="input input-bordered" />
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p><small>Already have an account? <Link to='/login'>Login Here</Link></small></p>
                </div>
            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;