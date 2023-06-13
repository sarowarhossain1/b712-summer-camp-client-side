import { Helmet } from "react-helmet-async";
import useBook from "../../../hook/useBook";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const MyClasses = () => {
    const [book, refetch] = useBook();
    const total = book.reduce((sum, item) => item.price +sum, 0)


    const handleDelete = row =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/books/${row._id}`, {
                method: 'DELETE',
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }

    return (
        <div className="w-full">
        <Helmet>
        <title>Unick | MyClasses</title>
       </Helmet>
           <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
            <h3 className="text-3xl">Total Class: {book.length}</h3>
            <h3 className="text-3xl">Total price: {total}</h3>
            <button className="btn btn-warning btn-sm">Pay</button>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <td>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </td>
        <th>Dance</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        book.map((row, index) => <tr
          key={row._id}
        >
            <th>
              {index + 1 }
            </th>
            <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={row.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
            </td>
            <td>
              {row.name}
            </td>
            <td className="text-end">${row.price}</td>
            <td>
              <button onClick={() => handleDelete(row)} className="btn btn-ghost btn-xs bg-pink-600 text-white"><FaTrashAlt></FaTrashAlt></button>
            </td>
          </tr> )
      }
     
      
      
    </tbody>    
  </table>
</div>
        </div>
    );
};

export default MyClasses;