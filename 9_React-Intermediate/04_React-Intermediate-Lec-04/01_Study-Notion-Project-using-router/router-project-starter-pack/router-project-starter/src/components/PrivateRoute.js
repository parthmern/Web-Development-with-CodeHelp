import React from "react";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";

function PrivateRoute({isLoggedIn,children}){

    // if logged in then only can access dashboard

    if(isLoggedIn){
        return children;
    }
    else{
        toast.error("unauthorized access");
        return <Navigate to="/login"></Navigate>
    }

}

export default PrivateRoute;