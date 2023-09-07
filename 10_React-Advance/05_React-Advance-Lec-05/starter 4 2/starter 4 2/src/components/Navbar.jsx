import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {


const {cart} = useSelector((state)=>state)
  return (
    <div className="bg-[black] py-3">
      <div className="flex flex-row justify-between px-10 items-center ">

        <NavLink to="/">
          <div>
          <img className="w-[230px]" src="https://codehelp-shopping-cart.netlify.app/logo.png"/>
          </div>
        </NavLink>

          <div className="flex gap-x-4 items-center relative">
            <NavLink to="/">
              <p className="text-white">Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="text-white">
                  <FaShoppingCart className="w-[30px] h-[30px]"/>
                  {
                    cart.length>0 ?<div className="absolute top-0 right-0 animate-bounce flex items-center justify-center bg-[green] h-[20px] w-[20px] rounded-full ">{cart.length}</div> : <></>
                  }
              </div>
            </NavLink>
            
          </div>
      </div>
    </div>
  )
};

export default Navbar;
