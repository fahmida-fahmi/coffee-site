import { Link, useLoaderData } from 'react-router-dom';
import banner from '../images/more/3.png'
import Images from './Images';
import PopularProduct from './PopularProduct';
import Quality from './Quality';
import { BsCup } from "react-icons/bs";
import { useState } from 'react';


const Container = () => {
    const coffeeLoader = useLoaderData()
    const [ coffees, setCoffees] = useState(coffeeLoader)
    const qualities = [
        {
            id: 1,
            img: 'src/images/icons/1.png',
            title: 'Awesome Aroma',
            para: 'You will definitely be a fan of the design & aroma of your coffee'
        },
        {
            id: 2,
            img: 'src/images/icons/2.png',
            title: 'High Quality',
            para: 'We served the coffee to you maintaining the best quality'
        },
        {
            id: 3,
            img: 'src/images/icons/3.png',
            title: 'Pure Grades',
            para: 'The coffee is made of the green coffee beans which you will love'
        },
        {
            id: 4,
            img: 'src/images/icons/4.png',
            title: 'Proper Roasting',
            para: 'Your coffee is brewed by first roasting the green coffee beans'
        }
    ]
    const images = [
        {
            id: 1,
            img: 'src/images/cups/Rectangle 9.png'
        },
        {
            id: 2,
            img: 'src/images/cups/Rectangle 10.png'
        },
        {
            id: 3,
            img: 'src/images/cups/Rectangle 11.png'
        },
        {
            id: 4,
            img: 'src/images/cups/Rectangle 12.png'
        },
        {
            id: 5,
            img: 'src/images/cups/Rectangle 13.png'
        },
        {
            id: 6,
            img: 'src/images/cups/Rectangle 14.png'
        },
        {
            id: 7,
            img: 'src/images/cups/Rectangle 15.png'
        },
        {
            id: 8,
            img: 'src/images/cups/Rectangle 16.png'
        }
    ]
    return (
        <div>
            <div className='banner'>
                <img src={banner} alt="" />
                <div className='family text-white absolute  w-2/5 inset-1/2'>
                    <h1 className='text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='family1 py-4'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#D2B48C] py-2.5 px-5 mt-4 text-black text-2xl hover:text-white hover:bg-inherit hover:border-2 hover:border-white border-orange-950 border-2'>Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3]'>
                <div className='flex w-4/5 mx-auto gap-16'>
                    {
                        qualities.map(quality => <Quality
                            key={quality.id}
                            quality={quality}
                        ></Quality>)
                    }
                </div>
            </div>
            <div className=' bg-white py-32'>
                <div className='product-banner'>

                    <div className='text-center '>
                        <p className='text-black'>--- Sip & Savor ---</p>
                        <h1 className='text-5xl family text-orange-950'>Our Popular Products</h1>
                        <Link to='/addCoffee'>
                            <button className='bg-[#D2B48C] py-2.5 px-5 mt-4 text-black text-2xl family border-orange-950 border-2 rounded hover:bg-inherit hover:bg-gray-100'>Add Coffee <BsCup className='inline' /> </button>
                        </Link>
                    </div>

                    <div className='w-4/5 mx-auto  grid grid-cols-2 gap-10 pt-14 rounded-md '>
                        {
                            coffees.map(coffee => <PopularProduct
                                key={coffee._id}
                                coffee={coffee}
                                coffees ={coffees}
                                setCoffees ={setCoffees}
                            ></PopularProduct>)
                        }
                    </div>
                </div>
                <div className='text-center py-32'>
                    <div className='pb-16'>
                        <p className='text-black family1 py-3'>Follow Us Now</p>
                        <h1 className='text-5xl family text-orange-950'>Follow on Instagram</h1>
                    </div>
                    <div className='grid grid-cols-4 gap-5 w-4/5 mx-auto'>
                        {
                            images.map(img => <Images
                                key={img.id}
                                image={img}
                            ></Images>)
                        }

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Container;