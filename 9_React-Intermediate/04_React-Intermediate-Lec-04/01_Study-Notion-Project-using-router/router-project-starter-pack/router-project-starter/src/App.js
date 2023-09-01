import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { useState } from "react";

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return(
    <div className="w-screen min-h-screen h-fit bg-richblack-900 flex flex-col">

      <Navbar
       className="text-white"
       isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      

      <Routes>

        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
        }></Route>
        
      </Routes>
    </div>
  );
}

export default App;
