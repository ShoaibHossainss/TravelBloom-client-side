import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from "react-simple-captcha";
import Footer from "../../../Footer/Footer";
import Navbar from "../Navbar";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa";
import SocialLogin from "./SocialLogin";



const Login = () => {
    
    const [disabled,setDisabled] = useState(true);
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
 useEffect(()=>{
    loadCaptchaEnginge(6); 
 },[])

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)
        signIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: "Login Successful",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from,{replace: true})
        })
    }
    const handleValidate = (e) => {
        const captchaValue = e.target.value;
        console.log(captchaValue)
        if (validateCaptcha(captchaValue)==true) {
           setDisabled(false)
        }
   
        else {
            alert('Captcha Does Not Match');
            setDisabled(true)
        }
    }
    return (
     
      
       <div>
        <Helmet>
                <title>Login</title>
            </Helmet>
        <Navbar></Navbar>
         <div className="hero min-h-screen mt-4 mb-2">
        <div className=" flex-col">
        <h2 className="text-center text-lg mb-6 mt-4 text-lime-700">
  Welcome back! Log in to continue your journey. <br />
  Access your account and explore new destinations.
</h2>

          <div className="card bg-base-100  max-w-sm  shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered bg-gray-50" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered bg-gray-50" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={handleValidate} name="captcha" placeholder="enter your captcha" className="input input-bordered bg-gray-50" required />
               
              </div>
              <div className="form-control mt-6">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
              </div>
              
            </form>
            <div className="text-center items-center mx-auto justify-center">
            <SocialLogin></SocialLogin>
            </div>
            <p className="text-center text-xl mb-4"><small>New here? <Link to='/register'><button className="btn btn-primary">Create Account</button></Link></small></p>
          </div>
        </div>
      </div>
      <Footer></Footer>
       </div>
       
    );
};

export default Login;