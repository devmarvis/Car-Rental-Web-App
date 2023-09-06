import { useLocation } from "react-router-dom";
import BookingDeets from "../Components/BookingDeets";

const BookSumm = () => {
  const location = useLocation();
  const { car } = location.state
  console.log(location);
  return (
    <section className="w-full p-7 sm:px-20 pt-28">
        <h3 className=" font-['Roboto'] font-semibold text-lg">Booking Summary:</h3>
        <div className=" flex flex-col w-full max-w-3xl">
          <BookingDeets />
          <div className="w-full flex flex-col md:flex-row mt-4">
            <div 
            className="w-full max-w-[350px] md:w-1/2 lg:w-[43%] h-[200px]">
              <img src={car.link} className="w-full h-full" alt={car.model} />
            </div>
            <div
            className="w-full md:w-1/2 lg:w-[65%] h-auto p-7"
            >
              <article>
                <h3 className=" text-lg font-semibold mb-1">{car.model}</h3>
                <p className=" text-lg font-light font-['Roboto']">${car.price}/day</p>
                <div className=" my-1 border-2 border-green-700 p-2 px-3 rounded bg-green-200">
                  <p className=" text-sm font-['Roboto']"><span className=" text-base font-semibold">Note: </span>Car Insurance included in the price.</p>
                </div>
                <p>Seats: <span className="font-['Roboto'] font-semibold">{car.seats}</span></p>
              </article>
            </div>
          </div>
          <button className=" bg-slate-900 text-white p-2 px-3 rounded-sm capitalize self-end">continue to book</button>
        </div>

    </section>
  )
}
export default BookSumm;