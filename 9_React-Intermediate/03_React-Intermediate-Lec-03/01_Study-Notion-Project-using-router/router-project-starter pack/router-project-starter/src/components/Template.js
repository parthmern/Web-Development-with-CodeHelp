import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({title,desc1,desc2,img,formtype,setIsLoggedIn}){

    return(
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {
                    formtype=="signup" ? 
                    (<SignupForm setIsLoggedIn={setIsLoggedIn} />) :
                    (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Signin with Google</p>
                </button>

            </div>

            <div>
                <img src={frameImage} alt="pattern" width={558} height={504} loading="lazy"></img>
                <img src={img} alt="students" width={558} height={490} loading="lazy"></img>
            </div>
        </div>
    )
}

export default Template;
