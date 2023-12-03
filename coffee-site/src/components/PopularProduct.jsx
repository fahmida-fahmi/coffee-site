// import React from 'react';
import { FaEye, FaPen } from "react-icons/fa";
// import { HiOutlinePencil } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';




const PopularProduct = ({ coffee, coffees, setCoffees }) => {
    // const { img, name, chef, price } = popularProduct
    const { _id,name, chef, photoUrl} = coffee

    const handleDelete = id => {
        console.log(id);

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
              fetch(`http://localhost:3000/coffee/${_id}`,{
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                      )
                      const remaining = coffees.filter(cof => cof._id !== _id)
                      setCoffees(remaining)
                }
              })
            }
          })
    }
    // const handleEdit = id =>{
      
    // }
    return (
        <div className=' bg-orange-50 flex justify-evenly items-center py-5 rounded-lg opacity-80' style={{ background: '#f5f4f1' }}>
            <img src={photoUrl} alt="" />
            <div className='family1 text-black'>
                <p className="font-semibold">Name: <span className="ps-2 font-normal">{name}</span></p>
                <p className="font-semibold">Chef: <span className="ps-2 font-normal">{chef}</span></p>
                {/* <p className="font-semibold">Price:<span className="ps-2 font-normal">{price}</span></p> */}
            </div>
            <div className="text-white">
              <Link to={`/coffeeDetails/${_id}`}>
                <div className="bg-[#D2B48C] p-4 rounded">
                    <FaEye></FaEye>
                </div>
              </Link>

                <Link to={`/updateCoffeeInfo/${_id}`} >
                  <div className="bg-black p-4 rounded my-4 ">
                    <FaPen></FaPen>
                  </div>

                </Link>
                <div className="bg-red-600 p-4 rounded cursor-pointer" onClick={()=> handleDelete(_id)}>
                    <BsTrash></BsTrash>

                </div>
            </div>
        </div>
    );
};

export default PopularProduct;