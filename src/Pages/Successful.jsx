import { Link } from "react-router-dom"
import success from "../assets/images/success.png"
import { useEffect } from "react";

const Successful = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <section className="flex flex-col items-center justify-center w-full h-screen text-center tracking-wider">
        <img 
        data-aos="zoom-out"
        src={success} alt="success-png" 
        className=" w-48 mb-3 ease-linear" />
        <article className="font-['Raleway'] mb-5">
          <div className=" mb-4">
            <h5 className="font-medium text-lg">Payment Successful</h5>
            <p className=" text-sm">Check your email for the receipt</p>
          </div>
          <p>For further inquiries, please email <span><a className="cursor-pointer underline-offset-2 underline text-sm" >bcr@gmail.com</a></span></p>
        </article>
        <Link to="/" className="rounded-sm font-['Roboto'] bg-[#4551f8] transition-all duration-500 text-gray-50 p-2 px-4">Continue To Home</Link>
    </section>
  )
}
export default Successful