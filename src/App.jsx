import { Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
} from "react-router-dom"
import Layout from "./Components/Layout"
import Home, { homeloader } from "./Pages/Home"
import Fleet, { fleetLoader } from "./Pages/Fleet"
import BookSumm from "./Pages/BookSumm"




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
    path="booking-summary" 
    element={<BookSumm />}
    />
  </Route>
))

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
