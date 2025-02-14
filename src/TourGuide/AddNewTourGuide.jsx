import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Navbar from "../Pages/Navbar";
import Footer from "../../Footer/Footer";
import { Helmet } from "react-helmet-async";


const AddNewTourGuide = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data =>{
        console.log(data);
       const formData = {
        name: data.name,
        image: data.profilePicture,
        email: data.email,
        phone: data.phone,
        address: data.address,
        education: data.education,
        position: data.position,
        company: data.company,
        years: data.years,
        skills: [data.skills1,data.skills2,data.skills3],
       }
       console.log(formData)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it!"
          }).then((result) => {
            if (result.isConfirmed){
                fetch('https://assignment-12-server-lac-ten.vercel.app/tourGuides',{
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            title: "Added!",
                            text: "Your assignment has been added.",
                            icon: "success"
                          });
                      
                    }
                    
                  })
             
            }
          });
    } 
    return (
        <div className="dark:text-white mt-16">
          <Helmet>
                <title>Add TourGuide</title>
            </Helmet>
          <Navbar></Navbar>
        <h3 className="text-3xl text-center mt-6">Add New Tour Guide Here</h3>
        <form className="mx-10 mb-4" onSubmit={handleSubmit(onSubmit)}>
       
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Name</span>
        </div>
        <input {...register("name",{required: true})} type="text" placeholder="Enter your name" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Email</span>
        </div>
        <input {...register("email",{required: true})} type="text" placeholder="Enter your email" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Image</span>
        </div>
        <input {...register("profilePicture",{required: true})} type="text" placeholder="Enter your image" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Phone</span>
        </div>
        <input {...register("phone",{required: true})} type="number" placeholder="Enter your number" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Education</span>
        </div>
        <input {...register("education",{required: true})} type="Enter your education" placeholder="Image" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Position</span>
        </div>
        <input {...register("position",{required: true})} type="Enter your position" placeholder="Number" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Company</span>
        </div>
        <input {...register("company",{required: true})} type="text" placeholder="Enter your company name" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Years</span>
        </div>
        <input {...register("years",{required: true})} type="number" placeholder="Enter your experience" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Skills</span>
        </div>
        <input {...register("skills1",{required: true})} type="text" placeholder="Enter your first skills" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Skills 2</span>
        </div>
        <input {...register("skills2",{required: true})} type="text" placeholder="Enter your second skills" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
        </div>
        <div className="form-control w-1/2">
        <label>
        <div className="label">
        <span className="label-text dark:text-white">Skills 3</span>
        </div>
        <input {...register("skills3",{required: true})} type="text" placeholder="Enter your third skills" className="input input-bordered w-full dark:bg-blue-900" />
        </label>
        </div>
       
       
        <button className="btn flex mx-auto mt-4 text-white bg-orange-500 border-none hover:bg-orange-600">Add Tour Guide</button>
        </form>
        <Footer></Footer>
        </div>
    );
};

export default AddNewTourGuide;