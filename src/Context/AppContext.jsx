import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({children}) => {
    const [formDetails, setFormDetails] = useState(null);
    const [selectedCar, setSelectedCar] = useState(null);

    function selectCar(car){
        setSelectedCar(car);
    }

    function handleBookingForm(details){
        setFormDetails(details)
    }
    return (
        <AppContext.Provider value={{
            formDetails, selectedCar, selectCar, handleBookingForm,
        }}>
            {children}
        </AppContext.Provider>
    )
}