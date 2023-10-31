const bcrypt = require("bcryptjs");                ////🎯 bcrypt is not installing so used bcryptjs insted bcrypt -- so run npm i bcryptjs
const User = require("../models/User");
const jwt = require("jsonwebtoken");  //  npm i jsonwebtoken
require("dotenv").config();

// signup route  handler
exports.signup = async (req, res) =>{
    try{
        // get data
        const {name, email, password, role} = req.body ;

        // if user already exist
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success : false ,
                message : "user/email already exist" ,
            })
        }

        
        let hashedPassword ;
        try{
            // password encryption
            // secure password using BCRYPT = bcrypt.hash(<data>, <no of rounds>)
            hashedPassword = await bcrypt.hash(password, 10);
        }

        catch(error){
            return res.status(400).json(
                {
                    success : false ,
                    message : "error in hasing password" ,
                }
            )
        }


        // create user
        const user = await User.create({name, email, password: hashedPassword, role});

        return(
            res.status(200).json(
                {
                    success : true ,
                    message : `user created successfully - ${user}`
                }
            )
        )

    }

    catch(error){
        console.log("errorr- user not created -- ",error);
        return(
            res.status(500).json({        
                    success : false ,
                    message : `user not created ${error}` ,
            })
        )
    }
    
}


//LOGIN

exports.login = async (req, res) =>{
    try{
        // data fetch
        const {email, password} = req.body ;

        // validation  -- email is empty or undefined (falsy), password is empty or undefined (falsy),
        if(!email || !password){
            return(
                res.status(400).json(
                    {
                        success : false ,
                        message : "please fill all the details ",
                    }
                )
            )
        };

        // check for already registered user
        const user = await User.findOne({email});
        // if user is not registered then
        if(!user){
            return(
                res.status(401).json(
                    {
                        success : false ,
                        message : "user is not registered"
                    }
                )
            )
        }

        // verify password and generate JWT token
        // bcrypt.compare(<real>, <hashed>) -- comparing
        if(await bcrypt.compare(password, user.password)){

            const payload = {
                email : user.email ,
                id : user._id ,
                role : user.role 
            }

            // if password matched then 
            // JWT me payload means "DATA" and secreateKey
            let token = jwt.sign(payload,
                                 process.env.JWT_SECRET,
                                 {
                                    expiresIn : "2h"
                                 }
                                );

            // user jo obj hai uske andar kar rahe hai niche ki 2line wo DB me change nhi ho rha
            // user.token = token ;
            // user.password = undefined ;

            // ye upar ki 2 line work nhi kar rhi so  -- user ko plain-OBJECT me convert kar rahe hai 
            user = user.toObject();
            user.token = token ;
            user.password = undefined ;

            // cookie("<cookieName>", <jwtToken or Value>, options)
            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly : true,
            }
            res.cookie("token", token, options).status(200).json(
                {
                    success : true ,
                    token , 
                    user ,
                    message : "user logged in successfully" ,
                }
            )
        }
        else{
            return(
                res.status(403).json(
                    {
                        success : false ,
                        message : "password incorrect" ,
                    }
                )
            )
        }


    }
    catch(error){
        console.log("error");
        res.status(500).json(
            {
                success : false ,
                message : 'login failure',
            }
        )
    }
}