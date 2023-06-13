import DeleteCars from "./pages/delete";
import Register from "./pages/registration";
import LandingPage from "./pages/landingPage";
import Home from "./pages/home";
import Login from "./pages/login";
import dataSlider from "./pages/dataSlider";
import AdminLogin from './pages/adminlogin';
import Update from "./pages/update";
import Jupiter from "./pages/jupiter";
import Dashboard from "./pages/dashboard";
import "./App.css";
import GetBooking from "./pages/getbooking";

import User from "./pages/userdetails";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import AdminSignup from "./pages/adminsignup";
import Sidebar from "./pages/jupiter";
import Conform from "./pages/bookingconform";
import Booking from './pages/carbooking';
function App() {
  return (
    <div className="App">
    
        <Routes>
		<Route path="/delete" element={<DeleteCars />}></Route>
		<Route path="/getbooking" element={<GetBooking />}></Route>

       <Route path="/add" element={<Register />}></Route>
       <Route path="/conform" element={<Conform/>}></Route>

  
       <Route path="/dash" element={<Dashboard />}></Route>
       <Route path="/update/:id" element={<Update />}></Route>
		
			<Route path="/jup" element={<Jupiter />}></Route> 
			<Route path="/delete" element={<DeleteCars />}></Route>

           <Route path="/reg" element={<Register />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/dataSlider" element={<dataSlider />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/user" element={<User/>}></Route>
         
        
		  <Route path="/home" element={<Home />}></Route>
		  <Route path="/carbooking/:id" element={<Booking/>}></Route>
          
        
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/adminsignup" element={<AdminSignup />}></Route>

         
          
        </Routes>
			
    
    </div>
  );
}

export default App;