import React from "react";
import logo from "../assets/Logo.svg" ;
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";


function Navbar(props){

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    

    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
            <Link to="/">
                <img src={logo} alt="logo" width="160px" height="32px" loading="lazy"/>
            </Link>

            <nav >
                <ul className="flex gap-x-6 text-white">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex item-center gap-x-4 text-richblack-100">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button className="bg-rich-black-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" >Login</button>
                    </Link>
                }
                {  !isLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-rich-black-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" >SignUp</button>
                    </Link>
                }
                {  isLoggedIn &&
                    <Link to="/">
                        <button
                        className="bg-rich-black-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" 
                        onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                            }} >Log Out</button>
                    </Link>
                }
                {  isLoggedIn &&
                    <Link to="/dashboard">
                        <button
                        className="bg-rich-black-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" 
                        >Dashboard</button>
                    </Link>
                }
            </div>


        </div>
    )
}

export default Navbar;