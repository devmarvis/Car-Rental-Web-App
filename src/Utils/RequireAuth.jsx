import { Navigate, useLocation, } from "react-router-dom";
import { useAppContext } from "./AppContext"

export const RequireAuth = ({children}) => {
    const { loginDetails } = useAppContext();
    const location = useLocation();

    console.log(children);

    if(!loginDetails){
      return <Navigate to="/login" state={{path: location.pathname}} />
    }

  return children
}