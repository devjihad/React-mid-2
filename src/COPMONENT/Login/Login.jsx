import { useState } from "react";
const Login = () => {
    const [pass,setpass]=useState(false)
    const hide=()=>{
        setpass(!pass)
    }
    return (
        <div className="flex justify-center items-center flex-col h-[450px]">
            <h1 className="text-3xl font-bold mb-5">Login Now</h1>
            <form className="h-[350px] w-[400px] bg-slate-300 flex justify-center items-center flex-col rounded-lg">
               <div>
               <label htmlFor="" className="text-xl font-bold">Email:</label><br />
               <input type="email" placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>
                </div><br />
                <div>
                <label htmlFor="" className="text-xl font-bold">Email:</label><br />
                <input type={pass ? 'text':'password'} placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
            </form>
        </div>
    );
};

export default Login;