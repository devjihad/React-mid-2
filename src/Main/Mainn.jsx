
import { Outlet } from 'react-router-dom';
import Navbar from '../COPMONENT/Navbar';
import Footer from '../COPMONENT/Login/Footer';

const Mainn = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainn;