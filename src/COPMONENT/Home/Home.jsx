import { useEffect, useState } from "react";
import SingleHome from "./SingleHome";
import Caroset from "./Caroset";
import Marque from "../Marque";




const Home = () => {
    const [house ,sethouse]=useState([])
    const [data,setdata]=useState(6)
    // console.log(house)
    useEffect(()=>{
        fetch('https://api2-kohl.vercel.app/allhouses')
        .then(result=>result.json())
        .then(data=>sethouse(data))
    },[])
   
    return (
        <div>
            <Marque></Marque>
            <div className="max-w-6xl mx-auto bg-slate-400 py-4 text-center text-2xl font-bold mt-8 rounded-xl">
                <h1>Meet your Home</h1>
            </div>
            <div className="grid grid-cols-3 max-w-6xl mx-auto gap-10 mt-5">
           {
            house.length? house.slice(0,data).map(value=><SingleHome value ={value} key={value._id}></SingleHome>):<div className="grid grid-cols-3 gap-96">
                <div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>
<div className="flex w-52 flex-col gap-4">
  <div className="skeleton h-32 w-full"></div>
  <div className="skeleton h-4 w-28"></div>
  <div className="skeleton h-4 w-full"></div>
  <div className="skeleton h-4 w-full"></div>
</div>

            </div>

           }
        </div>
        <div className="max-w-6xl mx-auto text-center mt-9">
            {
                data==6?<button className="btn btn-primary px-14 py-2 text-xl font-bold text-white" onClick={()=>setdata(house.length)}>View All</button>:<button className="btn btn-primary px-14 py-2 text-xl font-bold text-white"  onClick={()=>setdata(6)}>View less</button>
            }
        </div>
       
        <Caroset></Caroset>


        </div>
    );
};

export default Home;