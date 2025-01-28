import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
    const [pass,setpass]=useState(false)
    const hide=()=>{
        setpass(!pass)
    }
    return (
        <div className="flex justify-center items-center my-5 flex-col h-[450px]">
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
                <h1>Don't have account. <Link to='/resister'><span className="font-semibold" > Resister</span></Link></h1>
            </form>
        </div>
    );
};

export default Login;