

const Package = ({package}) => {
  const {tour_type,trip_title,price,primary_image} = package;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={primary_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{tour_type}</h2>
    <p>{trip_title}</p>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Package;