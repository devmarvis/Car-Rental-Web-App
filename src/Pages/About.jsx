import { useState } from "react"
import { Team } from "../assets/illustration/team"

const About = () => {
  const [showMore, setShowMore] = useState(false)
  return (
    <section className="w-full p-7 sm:px-20 pt-28 min-h-screen">
      <h3 className=" text-center text-4xl md:text-5xl capitalize font-bold font-['Roboto'] mb-16 text-[#4477CE]">about us</h3>
      <div className="flex flex-col md:flex-row mb-9">
        <article className=" mb-8 md:w-[40%]">
          <h5 className="font-['Roboto'] capitalize text-lg font-semibold mb-1">here at bill car rental:</h5>
          <p className={`${showMore ? "h-auto" : "h-[120px]"} transition-all ease-linear overflow-hidden mb-3`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum harum minima, distinctio incidunt voluptatibus ipsum, deleniti earum sapiente itaque esse repellendus. Distinctio debitis magni quas eveniet laboriosam dicta, quae eaque aliquid minus veniam consequatur magnam voluptatum et impedit. Nihil molestias odio eligendi nam, illum blanditiis. Molestias amet corporis assumenda minus placeat nisi eligendi neque recusandae, nulla fugiat facere sapiente veniam eius debitis aliquam molestiae eveniet consequuntur nemo, similique laborum officia.</p>
          <button 
          onClick={() => setShowMore(prev => !prev)}
          className=" bg-gray-900 text-gray-50 p-2 capitalize">{showMore ? "show less" : "read more"}</button>
        </article>
        <Team />
      </div>
      <h4 className=" capitalize text-center text-2xl font-['Roboto'] font-medium mb-4">frequently asked questions</h4>
    </section>
  )
}
export default About