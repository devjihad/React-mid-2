import { GiRapidshareArrow } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
const HomeDetails = ({loaderr}) => {
    console.log(loaderr)
    const {area,description,segment_name,rent,location,image, house_title,facilities }=loaderr
    const book=()=>{
        toast('This Home is Booked for you')
    }
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-4 mt-8 gap-3">
            <div className="col-span-3">
                <img className="rounded-xl" height={'400px'} width={'840px'} src={image} alt="" />
                <p className="text-2xl font-bold">Descroption</p>
                <hr  className="border-2 border-black"/>

                <h1 className="text-xl mt-3 mb-5">{description}</h1>
            </div>
            <div className="bg-slate-300 rounded-xl px-2">
                <h1 className="text-xl font-bold mt-4">Title:</h1>
                <h1 className="text-xl font-bold mt-2">{house_title}</h1>
                <hr className="border-2 border-black"/>
                <p className="text-xl font-semibold  mt-2">Facilities:</p>
                <h1 className="text-xl font-bold">{facilities}</h1>
                <h1 className="flex gap-2 items-center text-xl font-bold mt-3"> <FaMoneyCheckDollar />
                {rent}</h1>
                <h1 className="flex gap-2 items-center text-xl font-bold mt-3"> <GiRapidshareArrow />{area}</h1>
                <h1 className="flex gap-2 items-center text-xl font-bold mt-3"> <MdLocationOn />{segment_name}</h1>
                <h1 className="flex gap-2 items-center text-xl font-bold mt-3"> <MdLocationOn />{location}</h1>
                <div className="mt-3 text-center">
                    <button className="btn btn-primary px-8 py-2 text-lg" onClick={book}>Book </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeDetails;