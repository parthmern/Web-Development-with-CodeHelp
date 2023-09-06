import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return(
    <div>
      <div className="flex justify-between">

        <NavLink to="/">
            <img className="w-[170px]" src="https://codehelp-shopping-cart.netlify.app/logo.png"></img>
        </NavLink>

        
            <div>
              <NavLink to="/">
                <p >
                  HOME
                </p>
              </NavLink>
              <NavLink  to="/cart">
                <FaShoppingCart />
              </NavLink>
              
            </div>
        

        
      </div>
    </div>
  );
};

export default Navbar;
