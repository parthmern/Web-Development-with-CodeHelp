import React from "react";
import loginImg from "../assets/login.png";
import Template from "../components/Template.js";

function Login({setIsLoggedIn}){

    return(
        <div>
             <Template
             title="Welcome Back"
             desc1="Build skills for today, tomorrow, and beyond."
             desc2="Education to future-proof your career."
             img={loginImg}
             formtype="login"
             setIsLoggedIn={setIsLoggedIn}
             />
        </div>

    )

}

export default Login;