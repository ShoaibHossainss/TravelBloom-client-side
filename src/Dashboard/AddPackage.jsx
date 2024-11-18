import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AddPackage = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data =>{
        console.log(data);
       const formData = {
        tour_type: data.category,
        trip_title: data.title,
        price: data.price,
        about: data.about,
        tour_plan_day_1: [data.day_1_title,data.day_1_description],
        tour_plan_day_2: [data.day_2_title,data.day_2_description],
        tour_plan_day_3: [data.day_3_title,data.day_3_description],
        primary_image: data.image,
        secondary_images: [data.images1,data.images2,data.images3,data.images4,data.images5,data.images6],

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
                fetch('http://localhost:5000/touristSpot',{
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
        <div>
        <h3 className="text-3xl text-center mt-6">Add Your Package Here</h3>
        <form className="mx-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-2">
        <div className="label">
        <span className="label-text">Category</span>
        </div>
        <select defaultValue='default' {...register("category",{required: true})} className="select select-bordered w-full">
        <option value='default' disabled >Select a category</option>
        <option value="Adventure">Adventure</option>
        <option value="Cultural">Cultural</option>
        <option value="Relaxation">Relaxation</option>
        <option value="Wildlife">Wildlife</option>
        <option value="Cruise">Cruise</option>
        </select>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Tour Title</span>
        </div>
        <input {...register("title",{required: true})} type="text" placeholder="Enter your tour title" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Primary Image</span>
        </div>
        <input {...register("image",{required: true})} type="text" placeholder="Enter your primary image" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Price</span>
        </div>
        <input {...register("price",{required: true})} type="number" placeholder="Price" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">About</span>
        </div>
        <input {...register("about",{required: true})} type="text" placeholder="About Your Tour" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        <div className="form-control w-full mb-2">
        <label>
        <div className="label">
        <span className="label-text">Day-1 title</span>
        </div>
        <input {...register("day_1_title",{required: true})} type="text" placeholder="Enter Your Day-1 Title" className="input input-bordered w-full" />
        </label>
        </div>
        <label className="form-control mb-2">
        <div className="label">
        <span className="label-text">Day-1 description</span>
        </div>
        <textarea {...register("day_1_description",{required: true})} className="textarea textarea-bordered h-24" placeholder="Enter Your Day-1 Detailed Description"></textarea>
        </label>
        <div className="form-control w-full mb-2">
        <label>
        <div className="label">
        <span className="label-text">Day-2 title</span>
        </div>
        <input {...register("day_2_title",{required: true})} type="text" placeholder="Enter Your Day-2 Title" className="input input-bordered w-full" />
        </label>
        </div>
        <label className="form-control mb-2">
        <div className="label">
        <span className="label-text">Day-2 description</span>
        </div>
        <textarea {...register("day_2_description",{required: true})} className="textarea textarea-bordered h-24" placeholder="Enter Your Day-2 Detailed Description"></textarea>
        </label>
        <div className="form-control w-full mb-2">
        <label>
        <div className="label">
        <span className="label-text">Day-3 title</span>
        </div>
        <input {...register("day_3_title",{required: true})} type="text" placeholder="Enter Your Day-3 Title" className="input input-bordered w-full" />
        </label>
        </div>
        <label className="form-control mb-2">
        <div className="label">
        <span className="label-text">Day-3 description</span>
        </div>
        <textarea {...register("day_3_description",{required: true})} className="textarea textarea-bordered h-24" placeholder="Enter Your Day-3 Detailed Description"></textarea>
        </label>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Gallery Image-1</span>
        </div>
        <input {...register("images1",{required: true})} type="text" placeholder="Enter your first image" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Gallery Image-2</span>
        </div>
        <input {...register("images2",{required: true})} type="text" placeholder="Enter your second image" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Gallery Image-3</span>
        </div>
        <input {...register("images3",{required: true})} type="text" placeholder="Enter your third image" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Gallery Image-4</span>
        </div>
        <input {...register("images4",{required: true})} type="text" placeholder="Enter your fourth image" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Gallery Image-5</span>
        </div>
        <input {...register("images5",{required: true})} type="text" placeholder="Enter your fifth image" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Gallery Image-6</span>
        </div>
        <input {...register("images6",{required: true})} type="text" placeholder="Enter your sixth image" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        <button className="btn flex mx-auto mt-4">Add Package</button>
        </form>
        </div>
    );
};

export default AddPackage;