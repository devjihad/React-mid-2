import { Link } from 'react-router-dom';
import img from '../assets/logo.png'
import img2 from '../assets/user.png'
import Marque from './Marque';
const Navbar = () => {
    return (
        <div>
            <div className='text-black  flex justify-between max-w-6xl mx-auto bg-gradient-to-r from-gray-300 rounded-xl items-center'>
           <img height={'100px'} width={'100px'} src={img} alt="" /> 
           
           <div className='flex gap-5 text-xl font-bold'>
           <Link ><p id='donee'>Home</p></Link>
           <Link ><p id='donee'>About Us</p></Link>
           <Link ><p id='donee'>Contact</p></Link>
           <Link ><p id='donee'>Service</p></Link>
           </div>
           <div className='flex'>
            <img height={'100px'} width={'100px'} className='rounded-full' src={img2} alt="" />
           <Link to={'/login'}><button className="btn btn-primary text-xl font-semibold">Login</button></Link>
           </div>
        </div>
        <Marque></Marque>
        </div>
    );
};

export default Navbar;