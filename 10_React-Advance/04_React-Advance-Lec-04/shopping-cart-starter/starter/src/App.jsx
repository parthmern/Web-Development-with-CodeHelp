import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return(
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/cart" element={<Cart />} ></Route>
      </Routes>
    </div>
    
  );
};

export default App;
