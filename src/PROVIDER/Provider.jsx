import { createContext } from "react";

export const providerContext=createContext(null)
const Provider = ({children}) => {
    const name ='lkdfj'
    return (
        <div>
           <providerContext.Provider value={name}>
            {children}
            </providerContext.Provider> 
        </div>
    );
};

export default Provider;