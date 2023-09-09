import { useNavigate } from "react-router-dom"
import errorPng from "../assets/images/errorPng.png"


const Error = () => {
    const navigate = useNavigate();
  return (
    <section className="w-full h-screen p-7 sm:px-20 pt-28 text-center">
        <img 
        src={errorPng} alt="Error PNG"
        className=" w-[330px] mx-auto"
         />
         <p className=" uppercase font-['Raleway'] font-medium text-sm leading-relaxed tracking-wider mb-2">oops! the page you were looking for couldn't be found</p>
         <button 
         onClick={() => navigate("/", {replace: true})}
         className=" capitalize bg-[#4477CE] text-gray-50 p-2 px-4 rounded-sm font-['Roboto']">return to home</button>

    </section>
  )
}
export default Error