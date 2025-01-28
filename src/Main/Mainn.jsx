
import { Outlet } from 'react-router-dom';
import Navbar from '../COPMONENT/Navbar';

const Mainn = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainn;