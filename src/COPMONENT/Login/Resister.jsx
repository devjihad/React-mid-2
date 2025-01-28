import { Link } from "react-router-dom";


const Resister = () => {
    return (
        <div>
            <div className="flex justify-center items-center flex-col h-[450px] my-8">
            <h1 className="text-3xl font-bold mb-5">Login Now</h1>
            <form className="h-[450px] w-[400px] bg-slate-300 flex justify-center items-center flex-col rounded-lg">
               <div>
               <label htmlFor="" className="text-xl font-bold">Email:</label><br />
               <input type="email" placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>
                </div>
                <div>
                <label htmlFor="" className="text-xl font-bold">Email:</label><br />
                <input type='password' placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
                <div>
                <label htmlFor="" className="text-xl font-bold">Email:</label><br />
                <input type='password' placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
                <div>
                <label htmlFor="" className="text-xl font-bold">Email:</label><br />
                <input type='password' placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
                <h1 className="mt-5">You have account. <Link to='/login'><span className="font-semibold" > Login</span></Link></h1>
            </form>
        </div>
        </div>
    );
};

export default Resister;