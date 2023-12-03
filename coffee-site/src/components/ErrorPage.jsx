import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from './Header';
import SubFooter from './SubFooter';
import Footer from './Footer';
import errorImg from '../images/404/404.gif'

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center'>


            <Link to='/' className="hover:color-brown text-center">
                <button className="flex text-2xl text-center items-center justify-center  hover:color-brown  p-3 rounded-md">
                    <BsArrowLeft></BsArrowLeft>
                    <h1 className="family ms-4 "> Back to home  </h1>

                </button>
            </Link>
            </div>

            <div className='flex justify-center items-center'>

                <img src={errorImg} alt="" />
            </div>

            <SubFooter></SubFooter>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;