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
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input type="text"
                 required 
                 value={formData.email} 
                 onChange={changeHandler}
                 placeholder="enter email id" 
                 name="email"/>
            </label>

            <label>
                <p>password<sup>*</sup></p>
                <input type={showPassword ? "text" : "password"}
                 required 
                 value={formData.password} 
                 onChange={changeHandler}
                 placeholder="enter password" 
                 name="password"/>

            <span onClick={()=> setShowPassword((prev)=> !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) }
            </span>

            <Link to="/"><p>Forgot password</p></Link>
            </label>

            <button>
                Sign IN
            </button>


        </form>
    )

}

export default LoginForm;