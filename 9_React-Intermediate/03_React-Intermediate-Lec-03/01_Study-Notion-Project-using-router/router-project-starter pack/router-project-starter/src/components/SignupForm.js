import React from "react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai" ;
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){

    const [showPassword,setShowPassword] = useState(false);
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

        else{
            setIsLoggedIn(true);
            toast.success("Account created successfully");
            navigate("/dashboard");
            console.log(formData);
            var accountData = {...formData} ;
        }

        console.log("printing account data");
        console.log(accountData);
        
    }

    return(
        <div>
            <div>
                <button>student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler} >

            {/* first name and last name */}
            <div>

                <label>
                    <p>First Name <sup>*</sup></p>

                    <input 
                    type="text"
                    required
                    name="firstname"
                    onChange={changeHandler}
                    placeholder="enter first name"
                    value={formData.firstname}>
                    </input>
                </label>

                <label>
                    <p>Last Name <sup>*</sup></p>

                    <input 
                    type="text"
                    required
                    name="lastname"
                    onChange={changeHandler}
                    placeholder="enter last name"
                    value={formData.lastname}>
                    </input>
                </label>

            </div>
            
            {/* email address */}
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                    type="text"
                    name="email"
                    onChange={changeHandler}
                    placeholder="enter email address"
                    value={formData.email}
                />
            </label>

            {/* create pass and confim pass */}
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                    required
                    type={ showPassword ? "text" : "password" }
                    name="password"
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    value={formData.password}
                    />
                <span onClick={()=> setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                </span>    
                </label>


                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                    required
                    type={ showPassword ? ("text") :("password") }
                    name="confirmPassword"
                    placeholder="Enter confirm Password"
                    onChange={changeHandler}
                    value={formData.confirmPassword}
                    />
                <span onClick={()=> setShowPassword((prev)=> !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
                </span>    

                </label>

            </div>

            <button>
                Create Account
            </button>

                            

            </form>
        </div>
    )

}

export default SignupForm ;