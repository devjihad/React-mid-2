import  { useContext } from 'react';
import { providerContext } from '../PROVIDER/Provider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {value}=useContext(providerContext)
    if(value){
        return children
    }
    return <Navigate to='/login'></Navigate>
        
   
};

export default Private;