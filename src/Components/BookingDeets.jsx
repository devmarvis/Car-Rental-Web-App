import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom"

const BookingDeets = () => {
    const location = useLocation();
    const {pickUpAddress, dropOffAddress, pickUpDate, pickUpTime} = location.state;
  return (
    <div className="w-full max-w-[500px] md:min-w-[410px] lg:w-1/5 p-6 px-3 bg-white rounded-sm border flex flex-col gap-4 self-start">
        <article>
            <div className="flex items-center gap-3 mb-2">
                <h4 
                className="text-lg font-semibold capitalize">{pickUpAddress}</h4>
                <FontAwesomeIcon
                icon={faArrowRight}
                 />
                 <h4 
                 className="text-lg font-semibold capitalize">{dropOffAddress}</h4>
            </div>
            <div>
                <p>{pickUpDate}, {pickUpTime}</p>
            </div>
        </article>
        <button className=" uppercase bg-slate-900 text-gray-50 p-2 px-4 font-semibold">edit</button>
    </div>
  );
}
export default BookingDeets