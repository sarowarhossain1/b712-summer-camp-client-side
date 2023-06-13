import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useBook from "../../../hook/useBook";



const InstructorPage = ({item}) => {
 const {name, image, seats, price,_id} = item;
 const { user } = useContext(AuthContext);
 const [, refetch] = useBook();
 const navigate = useNavigate();
 const location = useLocation();
  
  const handleBookToAdd = item =>{
       console.log(item);
       if(user && user.email){
        const orderItem = {itemId:_id, name, image, price, email: user.email}
        fetch('http://localhost:5000/books', {
          method: 'POST',
          headers: {
                 'content-type': 'application/json'
          },
          body: JSON.stringify(orderItem)
        })
        .then(res =>res.json())
        .then(data =>{
          if(data.insertedId){
            refetch(); 
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Book Added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
       }
       else{
        Swal.fire({
          title: 'Please Login to Book Naw?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Naw!'
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', {state: {from: location}})
            
          }
        })
       }
  }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Instructor name: {name}</h2>
    <p>Available seats: {seats}</p>
    <p>Price: ${price}</p>
    <div className="card-actions justify-end">
      <button onClick={() => handleBookToAdd(item)} className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default InstructorPage;