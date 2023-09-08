import { Link, NavLink, useNavigate } from "react-router-dom"
import { Close, Hamburger } from "../assets/icons"
import { useState } from "react"
import { useAppContext } from "../Context/AppContext";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate()
    const { loginDetails } =  useAppContext();

    function handleActiveLink({isActive}){
        return {
            fontWeight: isActive ? "600" : ""
        }
    }

    function handleMobileNavbar(){
        setShowNav(prev => !prev);
    }

    function handleLoginBtn(){
        navigate("login");
        setShowNav(false)
    }

  return (
    <nav className="fixed top-0 flex justify-between items-center border-b h-20 px-7 sm:px-20 w-full font-['Roboto'] z-40 bg-[#EEEDED]">
        <Link className=" text-4xl uppercase font-bold text-[#4477CE] font-logo">bcr</Link>
        <ul className={`flex flex-col sm:flex-row items-center gap-10 sm:gap-5 md:gap-12 w-full sm:w-auto absolute sm:relative top-20 sm:top-auto right-0 sm:right-auto py-8 sm:py-auto ${showNav ? "translate-x-0" : "translate-x-full"} sm:translate-x-0 transition-transform backdrop-blur-sm sm:backdrop-blur-none `}>
            <NavLink
            style={handleActiveLink}
            to="."
            onClick={() => setShowNav(false)}
            >Home</NavLink>
            <NavLink
            to="fleet"
            onClick={() => setShowNav(false)}
            style={handleActiveLink}
            >Fleet</NavLink>
            <NavLink
            to="blog"
            onClick={() => setShowNav(false)}
            style={handleActiveLink}
            >Blog</NavLink>
            <NavLink
            to="about"
            onClick={() => setShowNav(false)}
            style={handleActiveLink}
            >About Us</NavLink>
            {loginDetails ? <button
            className="sm:hidden block">Logout</button> : <button
            onClick={handleLoginBtn}
            className="sm:hidden block">Login/Signup</button>}
        </ul>
        {loginDetails ? <button
            className="hidden sm:block">Logout</button> : <button 
        onClick={handleLoginBtn}
        className="hidden sm:block">Login/Signup</button>}
        <div className=" cursor-pointer block sm:hidden">
        {showNav ? <Close navController={handleMobileNavbar} /> : <Hamburger navController={handleMobileNavbar} />}
        </div>
    </nav>
  )
}
export default Navbar