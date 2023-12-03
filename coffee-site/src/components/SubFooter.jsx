import logo from '../images/more/logo1.png'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram, BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";


const SubFooter = () => {
    return (
        <div className='footerTopBanner'>
            <div className='w-4/5 mx-auto pt-32'>
                <img src={logo} alt="" className='w-16' />
                <div className='grid grid-cols-2 gap-10 justify-between items-center'>
                    <div className=''>
                        <h1 className='family text-orange-950 text-5xl py-8 font-bold'>Espresso Emporium</h1>
                        <p className='family1 text-xl text-black'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex text-orange-950 text-4xl py-8'>
                            <BsFacebook className='me-4'></BsFacebook>
                            <BsTwitter className='me-4'></BsTwitter>
                            <BsInstagram className='me-4'></BsInstagram>
                            <BsLinkedin></BsLinkedin>
                        </div>
                        <h1 className='family text-orange-950 text-5xl font-bold'>Get in Touch</h1>
                        <div className='py-8'>
                            <div className='flex items-center text-black'>
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                                <span className='ms-2'>+88 01533 333 333</span>
                            </div>
                            <div className='flex items-center text-black py-3'>
                                <BsFillEnvelopeFill></BsFillEnvelopeFill>
                                <span className='ms-2'>info@gmail.com</span>
                            </div>
                            <div className='flex items-center text-black'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <span className='ms-2'>72, Wall street, King Road, Dhaka</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='family text-orange-950 text-5xl py-5 font-bold'>Connect with Us</h1>
                        <form className='family1'>
                            <input type="text" name='name' placeholder='Name' className='rounded-md p-3 bg-white block w-3/4 border-2  focus:border-orange-950 focus:border-xl focus:shadow-lg' />
                            <input type="email" name='email' placeholder='Email' className='rounded-md p-3 bg-white block w-3/4 border-2  focus:border-orange-950 focus:border-xl focus:shadow-lg my-4' />

                            <textarea name="textarea" id="" cols="30" rows="5" placeholder='Message' className='rounded-md p-3 bg-white block w-3/4 border-2  focus:border-orange-950 focus:border-xl focus:shadow-lg'></textarea>
                            <button className='text-orange-950 border border-orange-950 rounded-2xl px-5 py-2 family font-semibold text-2xl my-5 hover:bg-[#331A15] hover:text-white'>Send Message</button>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SubFooter;