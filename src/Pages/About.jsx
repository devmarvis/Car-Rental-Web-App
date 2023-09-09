import { useEffect, useState } from "react"
import { Team } from "../assets/illustration/team"
import FAQS from "../Components/FAQS"

const About = () => {
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);

  return (
    <section className="w-full p-7 sm:px-20 pt-28 min-h-screen">
      <h3 className=" text-center text-4xl md:text-5xl capitalize font-bold font-['Roboto'] mb-16 text-[#4477CE]">about us</h3>
      <div 
      className="flex flex-col md:flex-row md:h-[300px] mb-16">
        <article 
        data-aos="fade-right"
        data-aos-duration="800"
        className=" mb-8 md:w-[40%]">
          <h5 className="font-['Roboto'] capitalize text-lg font-semibold mb-1">here at bill car rental:</h5>
          <p className={`${showMore ? "h-auto" : "h-[120px]"} transition-all ease-linear overflow-hidden mb-3`}>Bill Car Rental is your go-to destination for exceptional car rental experiences. With a passion for cars and a commitment to customer satisfaction, we provide a diverse fleet of vehicles to meet your every need. Our mission is to make renting a car a seamless and affordable experience, backed by top-notch customer service. Choose Bill Car Rental for convenience, quality, and unbeatable value, and let us help you embark on your next journey with confidence.</p>
          <button 
          onClick={() => setShowMore(prev => !prev)}
          className=" bg-gray-900 text-gray-50 p-2 capitalize">{showMore ? "show less" : "read more"}</button>
        </article>
        <Team />
      </div>
      <div className="w-full">
        <h4 className=" capitalize text-center text-2xl font-['Roboto'] font-medium mb-7">frequently asked questions</h4>
        <FAQS />
      </div>
    </section>
  )
}
export default About