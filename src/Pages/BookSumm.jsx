import { useLocation } from "react-router-dom";
import BookingDeets from "../Components/BookingDeets";

const BookSumm = () => {
  const location = useLocation();
  const { car } = location.state
  console.log(location);
  return (
    <section className="w-full p-7 sm:px-20 pt-28">
        <h3 className=" font-['Roboto'] font-semibold text-lg">Booking Summary:</h3>
        <div>
          <BookingDeets />
          <div className="w-full max-w-4xl flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 lg:w-[42%] h-[250px]">
              <img src={car.link} alt={car.model} />
            </div>
          </div>
        </div>

    </section>
  )
}
export default BookSumm;