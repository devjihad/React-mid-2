import { useEffect, useState } from "react";
import SingleHome from "./SingleHome";
import Caroset from "./Caroset";



const Home = () => {
    const [house ,sethouse]=useState([])
    // console.log(house)
    useEffect(()=>{
        fetch('https://api2-kohl.vercel.app/allhouses')
        .then(result=>result.json())
        .then(data=>sethouse(data))
    },[])
   
    return (
        <div>
            <div className="max-w-6xl mx-auto bg-slate-400 py-4 text-center text-2xl font-bold mt-8 rounded-xl">
                <h1>Meet your Home</h1>
            </div>
            <div className="grid grid-cols-3 max-w-6xl mx-auto gap-10 mt-5">
           {
            house.map(value=><SingleHome value ={value} key={value._id}></SingleHome>)
           }
        </div>
        <Caroset></Caroset>

        </div>
    );
};

export default Home;