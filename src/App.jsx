import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
} from "react-router-dom"
import Layout from "./Components/Layout"
import Home, { homeloader } from "./Pages/Home"
import Fleet, { fleetLoader } from "./Pages/Fleet"
import BookSumm from "./Pages/BookSumm"
import About from "./Pages/About"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Payment from "./Pages/Payment"
import { AppProvider } from "./Utils/AppContext"
import Successful from "./Pages/Successful"
import Login from "./Pages/Login"
import SignIn from "./Components/SignIn"
import { RequireAuth } from "./Utils/RequireAuth"
import Error from "./Pages/Error"




const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route 
    index 
    element={<Home />}
    loader={homeloader}
     />
     <Route
     path="fleet"
     element={<Fleet />}
     loader={fleetLoader}
    />
    <Route 
     path="about"
     element={<About />}
    />
    <Route
     path="booking-summary" 
     element={<RequireAuth><BookSumm /></RequireAuth>}
    />
    <Route 
     path="/booking-summary/payment"
     element={<Payment />}
    />
    <Route 
    path="/payment-success"
    element={<Successful />}
    />
    <Route
    path="*"
    element={<Error />}
     />
    <Route
    path="login"
    element={<Login />}
    >
      <Route 
      index
      element={<SignIn />}
      />
    </Route>
  </Route>
))

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
