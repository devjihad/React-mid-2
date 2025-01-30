import { Link, NavLink } from 'react-router-dom';
import img from '../assets/logo.png'
import img2 from '../assets/user.png'
import { useContext } from 'react';
import { providerContext } from '../PROVIDER/Provider';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
    const {value,logout}=useContext(providerContext)
    const out=()=>{
        logout()
        .then(()=>{
            toast('Logout success')
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className='text-black  flex justify-between max-w-6xl mx-auto bg-gradient-to-r from-gray-300 rounded-xl items-center'>
           <img height={'100px'} width={'100px'} src={img} alt="" /> 
           
           <div className='flex gap-5 text-xl font-bold'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Carrer'>Carrer</NavLink>
            <NavLink to='/service'>Service</NavLink>
         
           </div>
           {
            value? <div className='flex items-center gap-3 ' > <img height={'50px'} width={'50px'} className='rounded-full' src={value?.photoURL} alt="" /> <button className="btn btn-primary text-xl font-semibold text-white" onClick={out}>Logout</button></div>:<div className='flex items-center'>
           
           <Link to={'/login'}><button className="btn btn-primary text-xl font-semibold text-white">Login</button></Link>
           </div>
           }
        </div>
        <ToastContainer></ToastContainer>
        
        </div>
    );
};

export default Navbar;