import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai" ;
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){

    const [showPassword,setShowPassword] = useState(false);
    const [accountType,setAccountType] = useState("student");
    const navigate = useNavigate();

    const [formData,setFormData] = useState(
        {
            firstname : "",
            lastname : "",
            email : "",
            password : "",
            confirmPassword : "",
        }
    )

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

        if(formData.password != formData.confirmPassword){
            toast.error("password do not match");
            return;
        }

        
        setIsLoggedIn(true);
        toast.success("Account created successfully");
        navigate("/dashboard");
        console.log(formData);
        const accountData = {...formData} ;
        const finalData = {
            ...accountData,
            accountType
        }
        console.log("printing account data");
        console.log(finalData);
        
    }

    return(
        <div>
            <div className="flex bg-richblack-800 p-1 gap-z-1 my-6 rounded-full max-w-max">
                <button 
                className={accountType==="student" ? "bg-richblack-900 text-white  py-2 px-5 rounded-full transition-all duration-200" : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}
                onClick={()=>setAccountType("student")}>student</button>
                <button
                className={accountType==="instructor" ? "bg-richblack-900 text-white  py-2 px-5 rounded-full transition-all duration-200" : "bg-transparent text-richblack-200 py-2 px-5 rounded-full transition-all duration-200"}
                onClick={()=>setAccountType("instructor")}>Instructor</button>
            </div>

            <form onSubmit={submitHandler} className="mt-12">

            {/* first name and last name */}
            <div className="flex mt-[20px] w-full justify-between">

                <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]" >First Name <sup className="text-pink-200" >*</sup></p>

                    <input 
                    type="text"
                    required
                    name="firstname"
                    onChange={changeHandler}
                    placeholder="enter first name"
                    value={formData.firstname}
                    className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]"
                    >
                    </input>
                </label>

                <label>
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]">Last Name <sup className="text-pink-200">*</sup></p>

                    <input 
                    type="text"
                    required
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="enter last name"
                    value={formData.lastname}
                    className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]"
                    >
                    </input>
                </label>

            </div>
            
            {/* email address */}
            <div className="w-full mt-[20px]">
            <label className="w-full mt-[20px]">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]">Email Address <sup className="text-pink-200">*</sup></p>
                <input
                    type="text"
                    name="email"
                    onChange={changeHandler}
                    placeholder="enter email address"
                    value={formData.email}
                    className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]"
                />
            </label>
            </div>
            

            {/* create pass and confim pass */}
            <div className="flex mt-[20px] gap-x-10 w-full justify-between ">
                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]">Create Password<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type={ showPassword ? "text" : "password" }
                    name="password"
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    value={formData.password}
                    className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]"
                    />
                <span
                className="absolute text-white right-3 top-[38px] cursor-pointer"
                onClick={()=> setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24} />) }
                </span>    
                </label>


                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1,375rem]">Confirm Password<sup className="text-pink-200">*</sup></p>
                    <input
                    required
                    type={ showPassword ? ("text") :("password") }
                    name="confirmPassword"
                    placeholder="Enter confirm Password"
                    onChange={changeHandler}
                    value={formData.confirmPassword}
                    className="bg-richblack-800 rounded-[0.5rem] w-full text-richblack-5 p-[12px]"
                    />
                <span
                className="absolute text-white right-3 top-[38px] cursor-pointer"
                onClick={()=> setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24}/>) }
                </span>    

                </label>

            </div>

            <button className="bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mb-3 mt-6">
                Create Account
            </button>

                            

            </form>
        </div>
    )

}

export default SignupForm ;