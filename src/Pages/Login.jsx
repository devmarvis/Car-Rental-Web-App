import loginBg from "../assets/images/loginBg.jpg"
import { Outlet, } from "react-router-dom"

const Login = () => {
  return (
    <section className="w-full h-screen flex">
        <div 
        style={{
            backgroundImage: `url(${loginBg})`
        }}
        className="hidden md:block -z-10 after:-z-20 relative w-2/5 h-full bg-cover bg-left after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:opacity-70 p-7 sm:px-20 pt-28">
            <h4 className="text-white"></h4>
        </div>
        <div className="w-full md:w-3/5 flex justify-center items-center">
          <Outlet />
        </div>
    </section>
  )
}
export default Login