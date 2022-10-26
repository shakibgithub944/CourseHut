import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom'
// import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;