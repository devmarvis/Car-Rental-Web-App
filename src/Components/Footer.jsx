import { faFacebook, faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className=" w-full h-auto p-7 sm:px-20 flex flex-col md:gap-6 md:flex-row justify-between bg-[#EEEDED]">
        <article>
            <h3 className=" text-2xl uppercase font-bold text-[#4477CE] font-logo">BCR</h3>
            <address className=" capitalize">37 old boston road, maryland, lagos state, nigeria.</address>
        </article>
        <article>
            <h4 className=" uppercase mb-2">follow us</h4>
            <ul className="flex flex-wrap gap-4">
                <li className=" cursor-pointer w-9 h-9 rounded-full border-2 border-blue-700 flex justify-center items-center"><a>
                </a><FontAwesomeIcon 
                icon={faTwitter}
                className=" text-blue-700"
                /></li>
                <li className=" cursor-pointer w-9 h-9 rounded-full border-2 border-blue-700 flex justify-center items-center"><a>
                </a><FontAwesomeIcon 
                icon={faFacebookF}
                className=" text-blue-700"
                /></li>
                <li className=" cursor-pointer w-9 h-9 rounded-full border-2 border-pink-700 flex justify-center items-center"><a>
                </a><FontAwesomeIcon 
                icon={faInstagram}
                className=" text-pink-700 text-lg"
                /></li>
            </ul>
        </article>
        <nav className="flex flex-row md:flex-col gap-3 justify-center my-4 uppercase text-sm font-['Roboto'] font-medium">
            <Link>home</Link>
            <Link>fleet</Link>
            <Link>blog</Link>
            <Link>about us</Link>
        </nav>
        <article>
            <h4 className=" capitalize font-['Roboto'] mb-2">subscribe to our newsletter</h4>
            <input 
            type="text" 
            placeholder="Enter email"
            className=" bg-gray-200 p-2 px-3 block mb-2"
             />
            <button className=" bg-gray-900 text-gray-50 p-2 px-3 rounded-sm capitalize">subscribe</button>
        </article>
    </footer>
  )
}
export default Footer