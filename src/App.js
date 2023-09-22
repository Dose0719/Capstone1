import React from "react"
import "./index.css";
import Home from "./routes/Home"
import Offers from "./routes/Offers";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route} from "react-router-dom"
import SmallMid from "./routes/SmallMid";
import CarRentalP from "./routes/CarRentalP";
import CustomerService from "./routes/CustomerService"
import Under from "./routes/Under"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/SmallMid" element={<SmallMid />} />
        <Route path="/CarRentalP" element={<CarRentalP />} />
        <Route path="/CustomerService" element={<CustomerService />} />
        <Route path="/Under" element={<Under />} />
        
      </Routes>
    </>
  )
};

export default App;
