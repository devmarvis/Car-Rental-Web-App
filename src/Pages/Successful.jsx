import { Link } from "react-router-dom"
import success from "../assets/images/success.png"

const Successful = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-screen text-center tracking-wider">
        <img src={success} alt="" className=" w-48 mb-4 ease-linear" />
        <article className="font-['Raleway'] mb-4">
          <div className=" mb-4">
            <h5 className="font-medium">Payment Successful</h5>
            <p className=" text-sm">Check your email for the receipt</p>
          </div>
          <p>For further inquiries, please email <span><a className="cursor-pointer underline-offset-2 underline text-sm" >bcr@gmail.com</a></span></p>
        </article>
        <Link to="/" className=" bg-gray-900 text-gray-50 rounded-sm p-2 px-4">Continue To Home</Link>
    </section>
  )
}
export default Successful