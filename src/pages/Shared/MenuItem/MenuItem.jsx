

const MenuItem = ({item}) => {
 const {image, name, recipe} = item;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn  bg-orange-400">Contact Naw</button>
    </div>
  </div>
</div>
    );
};

export default MenuItem;