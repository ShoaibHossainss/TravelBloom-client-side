import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async data =>{
        console.log(data);
       const images = {
        tour_type: data.category,
        primary_image: data.images0,
        secondary_images: [data.images1,data.images2]
       }
       console.log(images)
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
                    body: JSON.stringify(images)
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
             <form onSubmit={handleSubmit(onSubmit)}>
             <select defaultValue='default' {...register("category",{required: true})} className="select select-bordered w-full">
  <option value='default' disabled selected>Select a category</option>
  <option value="Adventure">Adventure</option>
  <option value="Cultural">Cultural</option>
  <option value="Relaxation">Relaxation</option>
  <option value="Wildlife">Wildlife</option>
  <option value="Cruise">Cruise</option>
</select>
      <div className="form-control w-full">
    <label>
  <div className="label">
    <span className="label-text">images</span>
  </div>
  <input {...register("images0",{required: true})} type="text" placeholder="Image" className="input input-bordered w-full" />
</label>
                </div>
      <div className="form-control w-full">
    <label>
  <div className="label">
    <span className="label-text">images 1</span>
  </div>
  <input {...register("images1",{required: true})} type="text" placeholder="Image" className="input input-bordered w-full" />
</label>
                </div>
      <div className="form-control w-full">
    <label>
  <div className="label">
    <span className="label-text">images 2</span>
  </div>
  <input {...register("images2",{required: true})} type="text" placeholder="Image" className="input input-bordered w-full" />
</label>
                </div>
      <input type="submit" />
    
    </form>
            
        </div>
    );
};

export default Form;