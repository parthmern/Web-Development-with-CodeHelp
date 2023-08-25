import React from "react";
import "./Spinner.css";

const Spinner = () =>{
    return(
        <div>
            <div>
                <span className="loader"></span>
            </div>
            <div>
                <h3>Loading...</h3>
            </div>
        </div>
    );
}

export default Spinner;