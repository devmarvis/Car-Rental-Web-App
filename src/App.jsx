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
import { AppProvider } from "./Context/AppContext"
import Successful from "./Pages/Successful"




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
     element={<BookSumm />}
    />
    <Route 
     path="/booking-summary/payment"
     element={<Payment />}
    />
    <Route 
    path="/payment-success"
    element={<Successful />}
    />
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
