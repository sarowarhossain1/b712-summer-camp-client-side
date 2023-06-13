

const PopularItem = ({item}) => {
 const {name, image, email} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline border-0 border-b-4 mt-4 border-pink-400 bg-orange-500">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default PopularItem;