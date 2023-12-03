import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SubFooter from './SubFooter';

const Common = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <SubFooter></SubFooter>
            <Footer></Footer>
        </div>
    );
};

export default Common;