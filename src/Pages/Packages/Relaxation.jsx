import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../../../Footer/Footer";
import { Helmet } from "react-helmet-async";


const Relaxation = () => {
    const [items,setItem] = useState([]);
    
    useEffect(()=>{
        fetch('https://assignment-12-server-lac-ten.vercel.app/touristSpot')
        .then(res=>res.json())
        .then(data=>{
            setItem(data.filter(item=>item.tour_type==='Relaxation'))
        
   
        })
    },[])
    return (
        <div>
          <Helmet>
                <title>Relaxation</title>
            </Helmet>
          <Navbar></Navbar>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 mb-4 mx-auto justify-center">
          {
            items.map(p=>
                <div key={p._id} className="card bg-base-100 shadow-xl hover:bg-teal-200">
                <figure>
                <img className='relative'
                  src={p.primary_image}
                  alt="Shoes"/>
                </figure>
              <div className="card-body">
              <h2 className="card-title">Type: {p.tour_type}</h2>
                <p>Title: {p.trip_title}</p>
                <p>Price: {p.price}</p>
                <div className="card-actions flex gap-4">
                <Link to={`/package-details/${p._id}`}>
                  <button className="btn btn-primary">View Package</button>
                  </Link>
                  <Link to='/'>
      <button className="btn btn-primary">Go Back</button>
      </Link>
                </div>
              </div>
            </div>
            )
        }
          </div>
        <Footer></Footer>
    </div>
    );
};

export default Relaxation;