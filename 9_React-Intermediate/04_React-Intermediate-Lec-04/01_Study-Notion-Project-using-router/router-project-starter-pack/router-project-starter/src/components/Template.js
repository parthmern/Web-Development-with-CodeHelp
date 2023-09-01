import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {FcGoogle} from "react-icons/fc";

function Template({title,desc1,desc2,img,formtype,setIsLoggedIn}){

    return(
        <div className="flex h-full w-11/12 max-w-[1160px] py-12 mx-auto justify-between  gap-y-0">
            <div className="w-11/12 max-w-[450px]">
                <h1
                className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]"
                >{title}</h1>
                <p className="text-[1.125rem] leading-[1.625rem]">
                    <span className="text-richblack-100">{desc1}</span><br/>
                    <span className="text-blue-100">{desc2}</span>
                </p>

                {
                    formtype=="signup" ? 
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div className="flex w-full items-center gap-x-2">
                    <div className="h-[1px] w-full bg-richblack-700 "></div>
                    <p className="text-richblack-700 font-medium leading-[1.375rem]" >OR</p>
                    <div className="h-[1px] w-full bg-richblack-700 "></div>
                </div>

                <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border border-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6">
                    <FcGoogle/>
                    <p>Sign In with Google</p>
                </button>

            </div>

            <div className="relative w-11/12 max-w-[450px] ">
                <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy"></img>
                <img
                className="absolute -top-4 right-4"
                src={img} alt="students" width={558} height={490} loading="lazy"></img>
            </div>
        </div>
    )
}

export default Template;
