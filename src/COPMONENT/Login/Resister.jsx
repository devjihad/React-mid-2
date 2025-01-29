import { useContext } from "react";
import { Link } from "react-router-dom";
import { providerContext } from "../../PROVIDER/Provider";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";


const Resister = () => {
    const {resister} =useContext(providerContext)
    console.log(resister)
    const Handle=(e)=>{
        e.preventDefault()
        const main =e.target
        const Name =main.Name.value
        const email =main.email.value
        const photo =main.Photo.value
        const password =main.pass.value
        resister(email,password)
        .then((result)=>{
            console.log(result.user)
            updateProfile(result.user,{
                displayName:Name,
                photoURL:photo
            })
            .then(()=>{
                toast('User Updated')
            })
            .catch((err)=>{
                console.log(err.message)
            })
            toast('User Resister success')
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className="flex justify-center items-center flex-col h-[500px] my-8">
            <h1 className="text-3xl font-bold mb-5">Resister Now</h1>
            <form className="h-[500px] w-[400px] bg-slate-300 flex justify-center items-center flex-col rounded-lg" onSubmit={Handle}>
               <div>
               <label htmlFor="" className="text-xl font-bold">Name:</label><br />
               <input type="text" name="Name" placeholder="Enter your Name" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>
                </div>
                <div>
                <label htmlFor="" className="text-xl font-bold">PhotoURL:</label><br />
                <input type='text' name="Photo" placeholder="PhotoURL" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
                <div>
                <label htmlFor="" className="text-xl font-bold">Email:</label><br />
                <input type='email' name="email" placeholder="Enter your email" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
                <div>
                <label htmlFor="" className="text-xl font-bold">Password:</label><br />
                <input type='password' name="pass" placeholder="Enter your password" className="border-2 border-black py-2 px-5 rounded-lg w-[300px]"/>  
                </div>
                <button className="btn btn-active btn-neutral my-5 text-xl font-bold text-white px-10">Resister</button>
                <h1 className="mt-5">You have account. <Link to='/login'><span className="font-semibold" > Login</span></Link></h1>
            </form>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Resister;