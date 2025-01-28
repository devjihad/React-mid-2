import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { providerContext } from "../../PROVIDER/Provider";
const Login = () => {
    const [pass,setpass]=useState(false)
    const {login}=useContext(providerContext)
    const hide=()=>{
        setpass(!pass)
    }
    const log=(e)=>{
        e.preventDefault()
        const main =e.target
        const email =main.email.value
        const pass =main.pass.value
        login(email,pass)
        .then((res)=>{
            console.log(res.user)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div className="flex justify-center items-center my-5 flex-col h-[450px]">
            <h1 className="text-3xl font-bold mb-5">Login Now</h1>
            <form className="h-[350px] w-[400px] bg-slate-300 flex justify-center items-center flex-col rounded-lg" onSubmit={log}>
               <div>
               <label htmlFor="" className="text-xl font-bold">Email:</label><br />
               <input type="email" name="email" placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>
                </div><br />
                <div>
                <label htmlFor="" className="text-xl font-bold">Password:</label><br />
                <input type={pass ? 'text':'password'} name="pass" placeholder="Enter your Password" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
                <button>Login</button>
                <h1>Don't have account. <Link to='/resister'><span className="font-semibold" > Resister</span></Link></h1>
            </form>
        </div>
    );
};

export default Login;