import { useLoaderData } from "react-router-dom";
import HomeDetails from "./HomeDetails";


const IndividualHome = () => {
    const load =useLoaderData()
    console.log(load)
    return (
        <div>
            {
               load.map(loaderr=><HomeDetails loaderr={loaderr} key={loaderr.id}></HomeDetails>)
            }
        </div>
    );
};

export default IndividualHome;