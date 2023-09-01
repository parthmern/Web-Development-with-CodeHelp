import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai" ;
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}){

    const [formData,setFormData] = useState(
        {
            email : "",
            password : "",
        }
    )

    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event){
        
        
        setFormData((prevData)=>{
            return(
                {
                    ...prevData,
                    [event.target.name] : event.target.value 
                }
            )
        })
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
        console.log(formData);
        var accountData = {...formData} ;
        console.log("printing account data");
        console.log(accountData);
    }

    return(
        <form
        className="flex flex-col w-full gap-y-4 mt-6"
        onSubmit={submitHandler}>
            <label className="w-full ">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]">
                    Email Address
                    <sup className="text-pink-200">*</sup></p>
                <input type="text"
                 required 
                 value={formData.email} 
                 onChange={changeHandler}
                 placeholder="enter email id" 
                 name="email"
                 className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]"
                 />
            </label>

            <label className="w-full relative">
                <p
                className="text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]"
                >Password<sup className="text-pink-200">*</sup></p>
                <input type={showPassword ? "text" : "password"}
                 required 
                 value={formData.password} 
                 onChange={changeHandler}
                 placeholder="enter password" 
                 name="password"
                 className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]"
                 />

            <span
            className="absolute text-white right-3 top-[38px] cursor-pointer"
            onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24} />) }
            </span>

            <Link to="/"><p
            className="text-xs mt-1 text-blue-100 max-w-max ml-auto"
            >Forgot password</p></Link>
            </label>

            <button className="bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mb-3 mt-6">
                Sign IN
            </button>


        </form>
    )

}

export default LoginForm;