import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BookingDeets from "../Components/BookingDeets"
import { useAppContext } from "../Utils/AppContext"
import { faCreditCardAlt } from "@fortawesome/free-regular-svg-icons";
import visaLogo from "../assets/images/visa-master.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Payment = () => {
  const { selectedCar } = useAppContext();
  const navigate = useNavigate();

  const onInfoSubmit = (e) => {
    e.preventDefault();
    navigate("/payment-success", {replace: true})
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  
  return (
    <section className="w-full min-h-screen p-7 sm:px-20 pt-28 flex flex-col lg:flex-row md:items-start lg:gap-32">
        <div 
        data-aos="zoom-in"
        className="w-full max-w-[500px] md:min-w-[410px] lg:w-1/5 mb-6">{/*booking-summary */}
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
        <div 
        data-aos="zoom-in"
        className="w-full max-w-md flex flex-col">{/*Payment */}
          <div className=" flex items-center justify-between mb-4">
            <div>
              <input 
              type="radio" 
              name="card" 
              id="card" 
              checked={true}
              className="mr-2" />
              <label htmlFor="card">Pay via Debit / Credit Card</label>
            </div>
            <FontAwesomeIcon 
            icon={faCreditCardAlt}
            className=" text-xl"
            />
          </div>
          <div className=" flex justify-between items-center mb-5">
            <h5>Debit / Credit Card</h5>
            <img src={visaLogo} alt="" className=" w-24 h-7" />
          </div>
          <div className=" mb-9">
            <form 
            onSubmit={onInfoSubmit}
            className="flex flex-col w-full gap-3">
              <div>
                <label 
                htmlFor="name"
                className=" font-['Roboto']"
                >Name of Card Owner</label>
                <input 
                required
                autoComplete="name"
                type="text"
                id="name" 
                placeholder="Enter name on card" className="block bg-blue-100 p-2 px-4 mt-1 w-full rounded-sm"  />
              </div>
              <div>
                <label 
                htmlFor="email"
                className=" font-['Roboto']"
                >Email Address</label>
                <input 
                required
                autoComplete="email"
                type="email"
                id="email" 
                placeholder="Enter email address" className="block bg-blue-100 p-2 px-4 mt-1 w-full rounded-sm"  />
              </div>
              <div>
                <label 
                htmlFor="card-no"
                className=" font-['Roboto']"
                >Card Number</label>
                <input 
                required
                autoComplete="cc-number"
                type="text"
                id="card-no" 
                placeholder="Enter card number" className="block bg-blue-100 p-2 px-4 mt-1 w-full rounded-sm"  />
              </div>
              <div className="flex  justify-between">
                <div>
                  <label 
                  htmlFor="expiry"
                  className=" font-['Roboto']"
                  >Expiry Date</label>
                  <input 
                  required
                  autoComplete="cc-exp"
                  type="month" 
                  name="expiry" 
                  id="expiry" 
                  placeholder="Exp. Date"
                  className="block mt-1 p-2 px-4 w-28 bg-blue-100 rounded-sm" />
                </div>
                <div>
                  <label 
                  htmlFor="cvv"
                  className=" font-['Roboto']"
                  >CVV</label>
                  <input 
                  required
                  autoComplete="cc-csc"
                  type="text" 
                  name="cvv" 
                  id="cvv" 
                  placeholder="CVV"
                  className="block mt-1 p-2 px-4 w-24 bg-blue-100 rounded-sm" />
                </div>
              </div>
              <button 
              type="submit"
              className=" bg-[#4551f8] font-['Roboto'] text-gray-50 p-2 px-4 rounded-sm self-end">Proceed</button>
            </form>
          </div>
        </div>
    </section>
  )
}
export default Payment