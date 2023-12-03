import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdatedCoffeeInfo = () => {
    const coffeeLoad = useLoaderData()

    console.log(coffeeLoad.name);

    const handleForm = event =>{
        event.preventDefault()

        const form = event.target 
        const name = form.name.value 
        const category = form.category.value 
        const supplier = form.supplier.value
        const details = form.details.value
        const taste = form.taste.value
        const chef = form.chef.value 
        const photoUrl = form.photoUrl.value 

        const newCoffee = {
            name,category,supplier,details,taste,chef, photoUrl
        }
         
        console.log(newCoffee);
        fetch(`http://localhost:3000/coffee/${coffeeLoad._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            // form.reset()
        })
    }
    return (
        <div className="addCoffeeBanner family1">
            <div className="w-4/5 mx-auto py-20">
                <Link to='/' className="hover:color-brown">
                    <button className="flex text-2xl items-center hover:color-brown  p-3 rounded-md">
                        <BsArrowLeft></BsArrowLeft>
                        <h1 className="family ms-4"> Back to home  </h1>

                    </button>
                </Link>

                <div className="py-20 mt-12" style={{ background: "#F4F3F0" }}>
                    <div className="text-center py-5">
                        <h1 className="family font-semibold text-4xl">Update Coffee Info</h1>
                    </div>

                    <form className="w-3/4 mx-auto" onSubmit={handleForm}>
                        <div className="grid grid-cols-2 gap-5 " >
                            <div>

                                <label htmlFor="name" className="font-semibold">Name</label>
                                <input type="text" placeholder="Enter coffee name" id="name" name="name" className="rounded-md p-3 my-3 block w-full" defaultValue={coffeeLoad?.name} />
                                <label htmlFor="supplier" className="font-semibold">Supplier</label>
                                <input type="text" id="supplier" placeholder="Enter coffee supplier" name="supplier" className="rounded-md p-3 my-3 block w-full" defaultValue={coffeeLoad?.supplier}/>
                                <label htmlFor="category" className="font-semibold">Category</label>
                                <input type="text" id="category" placeholder="Enter coffee category" name="category" className="rounded-md p-3 my-3 block w-full" defaultValue={coffeeLoad?.category}/>
                            </div>
                            <div>
                                <label htmlFor="chef" className="font-semibold">Chef</label>
                                <input type="text" id="chef" placeholder="Enter coffee chef" name="chef" className="rounded-md p-3 my-3 block w-full" defaultValue={coffeeLoad?.chef}/>
                                <label htmlFor="taste" className="font-semibold">Taste</label>
                                <input type="text" id="taste" placeholder="Enter coffee taste" name="taste" className="rounded-md p-3 my-3 block w-full" defaultValue={coffeeLoad?.taste}/>
                                <label htmlFor="details" className="font-semibold">Details</label>
                                <input type="text" id="details" placeholder="Enter coffee details" name="details" className="rounded-md p-3 my-3 block w-full" defaultValue={coffeeLoad?.details}/>
                            </div>

                        </div>
                        <label htmlFor="photoUrl" className="font-semibold">Photo</label>
                        <input type="text" id="photoUrl" placeholder="Enter photo URL" name="photoUrl" className="p-3 my-3 w-full rounded-md" defaultValue={coffeeLoad?.photoUrl}/>
                        <input type="submit" className="bg-[#D2B48C] rounded-md border-2 border-orange-950 p-3 w-full mt-3 family text-3xl font-semibold cursor-pointer"/>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdatedCoffeeInfo;