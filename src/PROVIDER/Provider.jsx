import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/Firebase.config";

export const providerContext=createContext(null)
const Provider = ({children}) => {

    const [value, setvalue] =useState(null)
    console.log(value)
    const Auth =getAuth(app)
    const resister =(email,pass)=>{
        return createUserWithEmailAndPassword(Auth,email,pass)
    }
    const login =( email,pass)=>{
        return signInWithEmailAndPassword(Auth,email,pass)
    }

    useEffect(()=>{
        const change= onAuthStateChanged(Auth,(user)=>{
            if(user){
                setvalue(user)
            }
        })
        return()=>{
            change
        }
    },[])
    const logout=()=>{
        return signOut(Auth)
    }
 
    const name ={
       resister ,
       login,
       value,
       logout
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