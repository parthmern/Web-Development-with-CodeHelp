// auth, isStudent, isAdmin

// auth - authentication
// isStudent, isAdmin - authorization

const jwt = require("jsonwebtoken");
require("dotenv").config();

// next important hai
// jo routes me middleWares ka order hoga usii order me middlewares work karenge
// ex. "/student" route me <auth ,isStudent> 2 middelwares hai toh -- sab se pehle "Auth" then "isStudent" check hoga

exports.auth = (req, res, next) =>{
    try{
        // extract JWT token from REQ (token extract karne k ways-- REQ, COOKIES, HEADER)
        // const token = req.body.token || req.cookies.token ;
        const token = req.body.token ;

        if(!token){
            return(
                res.status(401).json(
                    {
                        success : false , 
                        message : "token missing", 
                    }
                )
            )
        }

        // Verify Token
        try{
            // to decode the token 
            const decode = jwt.verify(token, process.env.JWT_SECRET) ;
            console.log(decode);

            req.user = decode ;
        }
        catch(error){
            return(
                res.status(401).json(
                    {
                        success : false , 
                        message : "token is invalid" ,
                    }
                )
            )
        }

        // gooin to NEXT middleWare
        next();
    }
    catch(error){
        return(
            res.status(401).json(
                {
                    success : false , 
                    message : "something went wrong while verifying token" ,
                }
            )
        )
    }
}

exports.isStudent = (req, res, next) =>{

    try{
        if(req.user.role !== "Student"){
            return(
                res.status(401).json(
                    {
                        success : false ,
                        message : "this is protected route for students and REQ.USER.ROLE is not 'Student' ",
                    }
                )
            )
        }
        // next
        next();
    }
    catch(error){
        return(
            res.status(500).json(
                {
                    success : false ,
                    message : "user role is not matching" ,
                }
            )
        )
    }
}


exports.isAdmin = (req, res, next) =>{

    try{
        if(req.user.role !== "Admin"){
            return(
                res.status(401).json(
                    {
                        success : false ,
                        message : "this is protected route for students and REQ.USER.ROLE is not 'Admin' ",
                    }
                )
            )
        }
        // next
        next();
    }
    catch(error){
        return(
            res.status(500).json(
                {
                    success : false ,
                    message : "user role is not matching" ,
                }
            )
        )
    }
}