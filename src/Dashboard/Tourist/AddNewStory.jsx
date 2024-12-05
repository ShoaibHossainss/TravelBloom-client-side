import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";


const AddNewStory = () => {
    const { register, handleSubmit, control } = useForm();
    const onSubmit = async data =>{
        console.log(data);
        const formData = {
        title: data.title,
        location: data.location,
        experience: data.experience,
        dateVisited: data.dateVisited,
        highlights: [data.highlights1,data.highlights2,data.highlights3],
        imageUrl: data.imageUrl,
        type: data.type,

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
                fetch('https://assignment-12-server-lac-ten.vercel.app/touristStory',{
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
            <h3 className="text-3xl text-center mt-6">Add New Story Here</h3>
            <form className="mx-10" onSubmit={handleSubmit(onSubmit)}>
            <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">
        Title</span>
        </div>
        <input {...register("title",{required: true})} type="text" placeholder="Enter your tour title" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Location</span>
        </div>
        <input {...register("location",{required: true})} type="text" placeholder="Enter your tour location" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
            <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">
        Experience</span>
        </div>
        <input {...register("experience",{required: true})} type="text" placeholder="Enter your tour experience" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <div className="label">
        <span className="label-text">Category</span>
        </div>
        <select defaultValue='default' {...register("type",{required: true})} className="select select-bordered w-full">
        <option value='default' disabled >Select a category</option>
        <option value="Adventure">Adventure</option>
        <option value="Cultural">Cultural</option>
        <option value="Relaxation">Relaxation</option>
        <option value="Wildlife">Wildlife</option>
        <option value="Cruise">Cruise</option>
        <option value="Eco-Tourism">Eco-Tourism</option>
        </select>
        </div>

        </div>
            <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">
        Highlights</span>
        </div>
        <input {...register("highlights1",{required: true})} type="text" placeholder="Enter your tour highlights" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">Highlights 2</span>
        </div>
        <input {...register("highlights2",{required: true})} type="text" placeholder="Enter your tour highlights" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
            <div className='lg:flex mb-2 gap-4'>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">
        Highlights 3</span>
        </div>
        <input {...register("highlights3",{required: true})} type="text" placeholder="Enter your tour highlights" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="form-control w-full">
        <label>
        <div className="label">
        <span className="label-text">imageUrl</span>
        </div>
        <input {...register("imageUrl",{required: true})} type="text" placeholder="Enter your photo" className="input input-bordered w-full" />
        </label>
        </div>
        </div>
        <div className="form-control w-full">
          <label>
            <div className="label">
              <span className="label-text">Date</span>
            </div>
            <Controller
              name="dateVisited"
              control={control}
              rules={{ required: "Date is required" }}
              defaultValue={null} // Ensure default value is null to avoid issues
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  selected={value} // Bind value from form state
                  onChange={(date) => {
                    // Format the date into YYYY-MM-DD and update form state
                    const formattedDate = date ? date.toISOString().split("T")[0] : null;
                    onChange(formattedDate); // Pass formatted date to React Hook Form
                  }}
                  className="input input-bordered w-full"
                  dateFormat="yyyy-MM-dd" // Display the correct format in the input
                  placeholderText="YYYY-MM-DD"
                />
              )}
            />
          </label>
        </div>


<button className="btn flex mx-auto mt-4">Add New Story</button>
            </form>
            
        </div>
    );
};

export default AddNewStory;