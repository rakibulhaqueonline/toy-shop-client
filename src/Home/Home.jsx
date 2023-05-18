import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/Navbar/Navbar';
import Stats from '../Pages/Stats/Stats';
// import Gallary from '../Pages/Gallary/Gallary';



const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <Gallary></Gallary> */}
            <Outlet></Outlet>

            <Stats></Stats>
            <Footer></Footer>
        </div>
    );
};

export default Home;