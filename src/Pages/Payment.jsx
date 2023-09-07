import BookingDeets from "../Components/BookingDeets"
import { useAppContext } from "../Context/AppContext"

const Payment = () => {
  const { selectedCar } = useAppContext();
  return (
    <section className="w-full min-h-screen p-7 sm:px-20 pt-28">
        <div className="w-full max-w-[500px] md:min-w-[410px] lg:w-1/5">{/*booking-summary */}
          <h4 className=" font-['Roboto'] mb-2">Booking Summary</h4>
          <BookingDeets />
          <div className="p-4">
            <article className="flex flex-col gap-1 mb-3">
              <div className="flex justify-between">
                <span>Brand: </span>
                <span>{selectedCar.brand}</span>
              </div>
              <div className="flex justify-between">
                <span>Model: </span>
                <span>{selectedCar.model}</span>
              </div>
              <div className="flex justify-between">
                <span>Price: </span>
                <span>${selectedCar.price}/day (insurance included)</span>
              </div>
              <div className="flex justify-between">
                <span>VAT(12%): </span>
                <span>${0.12 * selectedCar.price}</span>
              </div>
            </article>
            <div className="flex justify-between">
                <span>Total: </span>
                <span>${Number(0.12 * selectedCar.price) + Number(selectedCar.price)}</span>
              </div>
          </div>
        </div>
    </section>
  )
}
export default Payment