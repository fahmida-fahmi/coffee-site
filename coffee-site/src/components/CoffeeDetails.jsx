import { BsArrowLeft } from "react-icons/bs";

import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffeeLoader = useLoaderData()
    // const {name,chef,photoUrl,details,taste,category,supplier} = {coffeeLoader}
    return (
        <div className="addCoffeeBanner family1">
            <div className="w-3/5 mx-auto py-20">
                <Link to='/' className="hover:color-brown">
                    <button className="flex text-2xl items-center hover:color-brown  p-3 rounded-md">
                        <BsArrowLeft></BsArrowLeft>
                        <h1 className="family ms-4"> Back to home  </h1>

                    </button>
                </Link>

                <div className="py-20 mt-12 bg-[#f4f3f0] flex justify-evenly items-center">
                    <img src={coffeeLoader?.photoUrl} className="w-96" alt="" />
                    <div className="font-semibold">
                        <h1 className="family text-4xl pb-5">Niceties</h1>
                        <p className="py-1">Name: <span className="font-normal"> {coffeeLoader?.name}</span></p>
                        <p className="py-1">Chef: <span className="font-normal"> {coffeeLoader?.chef}</span></p>
                        <p className="py-1">Supplier: <span className="font-normal"> {coffeeLoader?.supplier}</span></p>
                        <p className="py-1">Taste: <span className="font-normal"> {coffeeLoader?.taste}</span></p>
                        <p className="py-1">Category <span className="font-normal"> {coffeeLoader?.category}</span></p>
                        <p className="py-1">Details: <span className="font-normal"> {coffeeLoader?.details}</span></p>
                        
                    </div>


                </div>

            </div>
        </div>
    );
};

export default CoffeeDetails;