import { Await, defer, useLoaderData, useLocation, useNavigate } from "react-router-dom"
import { getCars } from "../firebase";
import BookingDeets from "../Components/BookingDeets";
import BookingForm from "../Components/BookingForm";
import { Suspense, useEffect, useState } from "react";
import { useAppContext } from "../Utils/AppContext";


export async function fleetLoader(){
  const data = getCars();
  return defer({data: data});
}

const Fleet = () => {
  const { formDetails, selectCar, edit, } = useAppContext();
  const loaderData = useLoaderData();
  const [brand, setBrand] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0)
  }, []);
  


  function handleBrandSelection(e){
    setBrand(e.target.value);
  }

  function handleBook(car){
    if(!formDetails){
      return console.log("error");
    }
    selectCar(car);
    navigate("/booking-summary")
  }

  return (
    <section className="w-full p-7 sm:px-20 pt-28 flex flex-col lg:flex-row gap-5">
      {!edit && formDetails ? <BookingDeets /> : <BookingForm />}
        <div className="flex flex-col items-start w-full lg:w-4/5">
          <h3 className="font-semibold text-xl font-['Roboto'] mb-1">Select Car Brand:</h3>
          <select 
          name="brand" 
          id="brand" 
          value={brand}
          onChange={handleBrandSelection}
          className="p-2 px-4 appearance-none rounded-sm font-semibold mb-5">
            <option value="">All</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes-Benz</option>
            <option value="Toyota">Toyota</option>
          </select>
          <Suspense
          fallback={<div className="w-full h-[48vh] flex justify-center items-center">
            <h3 className=" animate-pulse text-2xl font-['Noto'] tracking-wider font-medium">Loading...</h3>
          </div>}
          >
            <Await resolve={loaderData.data}>
              {
                (loadedCars) => {
                  const cars =brand ? loadedCars.filter(car => car.brand.includes(brand)) : loadedCars;
                  return (
                    <div className="w-full  h-auto
                    flex flex-wrap justify-start gap-8">
                      {cars.map(car => {
                        return (
                          <div 
                          data-aos="zoom-in"
                          key={car.id} 
                          className=" w-[330px] bg-white shadow rounded-sm">
                          <div className="w-full h-[220px] object-center object-cover overflow-hidden">
                            <img src={car.link} alt="" className="w-full h-full" />
                          </div>
                          <article className="p-8 w-full bg-gray-50">
                            <h4 className=" text-xl font-semibold">{car.model}</h4>
                            <p className=" font-semibold">${car.price}/day</p>
                            <button
                            onClick={() => handleBook(car)}
                            className="capitalize px-4 py-2 bg-gray-900 text-gray-50 rounded-full mt-3">book now</button>
                          </article>
                        </div>
                        )
                      })}
                    </div>
                  )
                }
              }
            </Await>
          </Suspense>
        </div>
    </section>
  )
}
export default Fleet