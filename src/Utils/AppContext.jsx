import { createContext, useContext, useState } from "react";


const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({children}) => {
    const [formDetails, setFormDetails] = useState(null);
    const [selectedCar, setSelectedCar] = useState(null);
    const [loginDetails, setLoginDetails] = useState(null);
    const [edit, setEdit] = useState(false);

    function selectCar(car){
        setSelectedCar(car);
    }

    function handleBookingForm(details){
        setFormDetails(details)
    }

    function handleLogin(credentials){
        setLoginDetails(credentials);
    }

    function handleLogout(){
        setLoginDetails(null)
        setFormDetails(null);
    }



    return (
        <AppContext.Provider value={{
            formDetails, 
            selectedCar, 
            selectCar, 
            handleBookingForm, 
            loginDetails, 
            handleLogin,
            handleLogout,
            edit,
            setEdit,
        }}>
            {children}
        </AppContext.Provider>
    )
}