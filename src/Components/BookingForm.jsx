import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const BookingForm = ({ handleEdit }) => {
    const navigate = useNavigate();
    const {formDetails, handleBookingForm} = useAppContext();
    const [formData, setFormData] = useState(formDetails || {
      pickUpAddress: "",
      dropOffAddress: "",
      pickUpTime: "",
      pickUpDate: "",
  });

    function handleFormInputs(e){
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const [errorMessage, setErrorMessage] = useState();

    function handleReserveSubmit(e){
      e.preventDefault();
      if(!formData.pickUpAddress || !formData.dropOffAddress || !formData.pickUpDate || !formData.pickUpTime ){
        setErrorMessage("Please fill in all input fields");
      }else{
        handleBookingForm(formData);
        navigate("/fleet");
      }
    }

    function handleSave(){
      if(!formData.pickUpAddress || !formData.dropOffAddress || !formData.pickUpDate || !formData.pickUpTime ){
        setErrorMessage("Please fill in all input fields");
      }else{
        handleBookingForm(formData);
        handleEdit();
      }
    }

  return (
    <form 
    onSubmit={handleReserveSubmit}
    className="w-full sm:min-w-[340px]  max-w-sm p-6 px-3 bg-white flex flex-col gap-3 rounded-sm shadow self-start">
        <div className="w-full flex gap-2">
          <input 
          onChange={handleFormInputs}
          value={formData.pickUpAddress}
          name="pickUpAddress"
          type="text" 
          placeholder="Pickup Address" 
          className="py-2 px-4 bg-gray-200 rounded-md w-1/2 outline-none" />
          <input 
          onChange={handleFormInputs}
          value={formData.dropOffAddress}
          name="dropOffAddress"
          type="text" 
          placeholder="Drop-off Address" 
          className="py-2 px-4 bg-gray-200 rounded-md w-1/2 outline-none" />
        </div>
        <div className="w-full flex gap-2 mb-1">
          <input 
          onChange={handleFormInputs}
          value={formData.pickUpTime}
          name="pickUpTime"
          type="text" 
          placeholder="Pickup Time" 
          className="py-2 px-4 bg-gray-200 rounded-md w-1/2 outline-none" />
          <input 
          onChange={handleFormInputs}
          value={formData.pickUpDate}
          name="pickUpDate"
          type="date" 
          placeholder="Pickup Date" 
          className="py-2 px-4 bg-gray-200 rounded-md w-1/2 outline-none" />
        </div>
        {errorMessage && <p className=" text-red-600">{errorMessage}</p>}
        {location.pathname !== "/" ? <button 
        onClick={handleSave}
        className=" self-start bg-slate-900 p-2 px-3 text-gray-50 rounded-sm">Save</button> : <button 
        type="submit"
        className=" self-start bg-slate-900 p-2 px-3 text-gray-50 rounded-sm">Reserve Now</button>}
    </form>
    
  )
}
export default BookingForm