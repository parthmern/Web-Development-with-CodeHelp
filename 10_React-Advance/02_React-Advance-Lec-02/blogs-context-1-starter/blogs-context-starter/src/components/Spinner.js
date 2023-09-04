import React from "react";
import "./Spinner.css" ;

function Spinner(){

    return(
        <div className="h-screen flex items-center justify-center">
            <span className="loader"></span>
        </div>
    )
}

export default Spinner;