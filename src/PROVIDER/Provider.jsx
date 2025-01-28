import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/Firebase.config";
export const providerContext=createContext(null)
const Provider = ({children}) => {
    const Auth =getAuth(app)
    const resister =(email,pass)=>{
        return createUserWithEmailAndPassword(Auth,email,pass)
    }
    const login =( email,pass)=>{
        return signInWithEmailAndPassword(Auth,email,pass)
    }
    const name ={
       resister ,
       login
    }
    return (
        <div>
           <providerContext.Provider value={name}>
            {children}
            </providerContext.Provider> 
        </div>
    );
};

export default Provider;