import { GiRapidshareArrow } from "react-icons/gi";
import { SiCashapp } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SingleHome = ({value}) => {
    console.log(value)
    const {house_title,image,rent,area,location,id}=value
    return (
        <div>
            <div className="h-[450px] w-[350px] bg-slate-200 rounded-xl">
                <img className="rounded-xl h-[250px] w-[350px] " src={image} alt="" />
            <div className="px-3">
            <h1 className="text-xl font-bold mt-2">{house_title}</h1>
                <div className="flex justify-between">
                    <h1 className="flex items-center gap-2"><SiCashapp /><span>{rent}</span></h1>
                    <h1 className="flex items-center gap-2"><GiRapidshareArrow /><span>{area}</span></h1>
                </div>
                <h1 className="flex items-center gap-2"><FaLocationDot /><span>{location}</span></h1>
            </div>
            <div className="flex justify-center mt-9">
            <Link to={`/${id}`}> <button className="btn btn-primary py-2 px-7 text-xl font-semibold text-white">Details </button></Link>
            </div>
            </div>
        </div>
    );
};

export default SingleHome;